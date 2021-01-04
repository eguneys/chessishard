const ndjson = require('ndjson');
const AbortController = require('abort-controller');
const fetch = require('node-fetch');

const fenToMove = fen =>
      fen.includes('w') ? 'white' : 'black';

const opposite = c => c === 'white' ? 'black' : 'white';

const listenStreaming = ({
  url,
  headers,
  timeoutDelay = 15 * 60 * 1000
}, onData) => {
  let controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, timeoutDelay);

  return fetch(url, {
    headers,
    signal: controller.signal
  }).then(res => {
    return new Promise((resolve, reject) => {
      res.body.pipe(ndjson.parse())
        .on('data', async (obj) => {
          onData(obj, resolve, controller);
        })
        .on('error', () => {
          reject();
        });
    });
  }).finally(() => {
    clearTimeout(timeout);
    controller.abort();
  });
};


function LiApi() {

  let _headers = token => ({
    'Authorization': `Bearer ${token}`
  });

  this.listenFen = async (token, { fen, draw }, onFound) => {

    let playerColor = fenToMove(fen),
        aiColor = opposite(playerColor);

    let headers = {
      ..._headers(token),
      'Accept': 'application/json'
    };

    const listenGame = gameid => {
      let url = `https://lichess.org/api/board/game/stream/${gameid}`;
      
      return listenStreaming
      ({ url, 
         headers }, async (data, resolve, controller) => {
        if (data.type === 'gameFull') {
          if (data[aiColor].aiLevel !== 8 ||
             data.initialFen !== fen) {
            resolve(false);
          }
        } else if (data.type === 'gameState') {
          if (data.status === 'resign' || data.status === 'aborted') {
            resolve(false);
          } else if (data.status === 'draw') {
            resolve(draw);
          } else if (data.status === 'mate') {
            resolve(data.winner === playerColor);
          }
        }
      });
    };

    let url = `https://lichess.org/api/stream/event`;


    listenStreaming({ url, 
                      headers },  async (data, resolve) => {
      if (data.type === 'gameStart') {
        let found = await listenGame(data.game.id);

        if (found) {
          onFound();
          resolve();
        }
      };
    });
  };

  this.aiFen = async (token, exercise) => {

    let { fen, short } = exercise;

    let limit = 60 * 10;

    let headers = {
      ..._headers(token),
      'Content-Type': 'application/json'
    };

    let game = await fetch(`https://lichess.org/api/challenge/ai`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        level: 8,
        clock: {
          limit,
          increment: 0
        },
        color: fenToMove(fen),
        fen
      })
    }).then(res => res.json());    

    return game;
  };

}



module.exports = new LiApi();

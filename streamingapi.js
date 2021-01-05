const fetch = require('node-fetch');
const AbortController = require('abort-controller');
const ndjson = require('ndjson');

module.exports = ({
  url,
  headers,
  timeoutDelay = 15 * 60 * 1000
}, onData) => {
  let controller = new AbortController();

  let timeout;

  function scheduleAbort() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      controller.abort();
    }, timeoutDelay);
  }

  scheduleAbort();

  return fetch(url, {
    headers,
    signal: controller.signal
  }).then(res => {
    return new Promise((resolve, reject) => {
      res.body.pipe(ndjson.parse())
        .on('data', async (obj) => {
          onData(obj, resolve, controller);
          scheduleAbort();
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

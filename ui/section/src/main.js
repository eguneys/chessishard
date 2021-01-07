import boot from './boot';
import ChessMd from 'chessm';

export function app(opts) {

  const onFen = (fen) => {
    let slug = fen;
    window.open(`https://lichess.org/editor/${slug}`);
  };

  ChessMd(opts.$_, { md: opts.data, events: { onFen } });

  console.log(`[ChessM@${ChessMd.version}]`);

}

export { boot };

import boot from './boot';
import ChessMd from 'chessmd';

export function app(opts) {

  ChessMd(opts.$_, { content: opts.data });

}

export { boot };

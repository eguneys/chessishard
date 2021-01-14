let store = require('./firestore');

const isProd = process.env.NODE_ENV === 'production';
const mName = name => isProd ? name : `${name}-dev`;

const session = mName('session');
const liuser = mName('liuser');
const book = mName('book');
const progress = mName('progress');
const envName = mName('env');

const opening = mName('opening');
const openingPlayer = mName('openingplayer');

const mInit = (m, coll) => m(store(coll));

module.exports = {
  sessionm: mInit(require('./sessionm'), session),
  userm: mInit(require('./liuserm'), liuser),
  bookm: mInit(require('./bookm'), book),
  progressm: mInit(require('./progressm'), progress),
  envm: mInit(require('./envm'), envName),
  openingm: mInit(require('./openingm'), opening),
  openingPlayerm: mInit(require('./openingPlayerm'), openingPlayer),
  terminate: store.terminate
};

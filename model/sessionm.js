let { nextString } = require('./random');

module.exports = (coll) => {
  return new SessionM(coll);
};

function SessionM(coll) {

  let newSession = (userid) => ({
    id: nextString(8),
    userid
  });

  this.insert = (userid) =>
  coll.insert(newSession(userid));

  this.byId = (name) =>
  coll.one(name);

  this.update = (name, f) =>
  coll.update(name, f);

  this.drop = () =>
  coll.drop();
};

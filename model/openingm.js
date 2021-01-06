let { nextString } = require('./random');

module.exports = (coll) => {
  return new OpeningM(coll);
};


function OpeningM(coll) {

  let newSection = (name, handle) => ({
    id: nextString(8),
    name,
    handle
  });

  this.insertSection = (name, handle) =>
  coll.insert(
    newSection(name, handle));

  this.update = (sectionId, f) =>
  coll.update(sectionId, f);

  this.sectionById = sectionId =>
  coll.one(sectionId);

  this.sectionsLight = () =>
  coll.query(_ => _.select('name', 'handle'));
}

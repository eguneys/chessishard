let { nextString } = require('./random');

module.exports = (coll) => {
  return new OpeningM(coll);
};


function OpeningM(coll) {

  let newSection = (name) => ({
    id: nextString(8),
    name,
    body: ''
  });

  this.insertSection = (chapterId, name) =>
  coll.insert(
    newSection(chapterId,
               name));

  this.update = (sectionId, f) =>
  coll.update(sectionId, f);

  this.sectionById = sectionId =>
  coll.one(sectionId);

  this.sectionsLight = () =>
  coll.query(_ => _.select('name', 'handle'));
}

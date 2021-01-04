module.exports = env =>
({
  home: require('./home')(env),
  auth: require('./auth')(env),
  practice: require('./practice')(env),
  editor: require('./editor')(env),
  opening: require('./opening')(env)
});

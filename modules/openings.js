let res = {};

res.validate = function (body) {

  if (!body) return `Empty body`;
  if (typeof body.name !== 'string') return 'Name must be a string';
  if (typeof body.handle !== 'string') return 'Handle must be a string';
  if (!body.name.match(/[a-z|A-Z\d]{10,}/)) return 'Name must be at least 10 characters';
  if (!body.handle.match(/^[a-z\d]{4,}$/)) return 'Handle must contain lowercase letters and numbers';

  return undefined;
};

module.exports = res;

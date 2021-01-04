let express = require('express');
let multer = require('multer');
let upload = multer();

module.exports = function makeRouter(env) {

  let router = express.Router();

  let { home,
        auth,
        practice,
        editor,
        opening
      } = require('./ctrls')(env);

  router.get('/', home.index);
  router.get('/auth', auth.lichess);
  router.get('/callback', auth.callback);

  router.get('/editor', editor.index);

  router.get('/practice', practice.index);
  router.get('/section/:sectionId', practice.section);

  router.get('/challenge/:exerciseId', practice.challenge);

  router.get('/opening', opening.index);
  router.post('/opening/section', opening.newSection);

  router.get('/opening/:sectionId', opening.section);
  router.get('/opening/:sectionId/editor', opening.sectionEdit);
  router.post('/opening/:sectionId', upload.none(), opening.sectionEditPost);

  return router;
};

let express = require('express');
let router = express.Router();

let homeController = require('./ctrls/home'),
    articleController = require('./ctrls/article');

router.get('/', homeController);
router.get('/:article{8}', articleController);

module.exports = router;

const router = require('express').Router();
const controller = require('./controller');

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

router
  .route('/:id') // passes an id property to req.params
  .put(controller.update)
  // .delete(controller.delete);

module.exports = router;
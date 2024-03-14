const express = require('express');
const router = express.Router();

router.get('/string', (req, res) => {
  const responseObject = { string: 'Hey now' }; 
  res.render('index', { title: 'GET Route', message: responseObject.string });
});
router.post('/postRoute', express.urlencoded({ extended: true }), (req, res) => {
  const message = req.body.message || 'Default message';
  const responseObject = { 
    originalString: message,
    length: message.length
  };
  res.render('index', { title: 'POST Route', message: responseObject.originalString, length: responseObject.length });
});
router.get('/names/:name', (req, res) => {
  const name = req.params.name;
  const responseObject = { name: name }; 
  res.render('index', { title: 'GET Route with Param', name: responseObject.name });
});

module.exports = router;

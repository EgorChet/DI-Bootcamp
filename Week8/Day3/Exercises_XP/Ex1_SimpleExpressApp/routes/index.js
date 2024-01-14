const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Main Page');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

module.exports = router;
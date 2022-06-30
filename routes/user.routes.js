const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(req.user === undefined) {
    res.redirect('noPermission');
  } else {
    next();
  }
};

router.get('/logged', (req, res) => {
  res.render('logged', { userName: req.user._json.name, userImage: req.user._json.picture });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.send('User profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.send('User settings');
});

module.exports = router;
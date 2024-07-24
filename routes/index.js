
const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => res.send(
    'Welcome to the home page'));

module.exports= router;
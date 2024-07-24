
const express = require('express');
const router = express.Router();

//Routes
router.get('/login', (req, res) => res.send(
    'login pahe here'));

//register page 
router.get('/register', (req, res) => res.send( 
    'register page here')); 

module.exports= router;
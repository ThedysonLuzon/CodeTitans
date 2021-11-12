var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Survey = require('../models/surveys');

let Controller = require('../controllers/survey');


router.get('/', Controller.displaySurveyList);

router.get('/add', Controller.displayAddPage);
router.post('/add', Controller.processAddPage);

router.get('/edit/:id', Controller.displayEditPage);


router.post('/edit/:id', Controller.processEditPage);


router.get('/delete/:id', Controller.performDelete);

module.exports = router;




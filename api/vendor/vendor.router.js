const { getSettings } = require('./vendor.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validations')

router.get("/public/setting",getSettings);

module.exports = router; 

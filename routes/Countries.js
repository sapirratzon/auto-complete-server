var express = require('express');
var router = express.Router();

var CountriesList = require('./CountriesData');
/**
 * Get all countries with prefix match to the user input
 */
router.get('/getCountries/:userSearchInput', (req, res) => {
    const userInput = req.params.userSearchInput;
    var filtered = CountriesList.filter(country => country.name.toLowerCase().startsWith(userInput.toLowerCase()));
    res.send(JSON.stringify(filtered)).status(200);
});

module.exports = router;

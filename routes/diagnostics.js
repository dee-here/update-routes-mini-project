const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// TODO: Logic for sending all the content of db/diagnostics.json
// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) =>
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  res.json(`${req.body} request received`);
  console.info(req.body);

  const { time, error_id, errors } = req.body;
  const newDiagnostic = {time, error_id, errors};
console.log(newDiagnostic)


});

module.exports = diagnostics;

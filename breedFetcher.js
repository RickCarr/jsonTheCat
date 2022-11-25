const request = require('request');



const fetchBreedDescription = (param1, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${param1}`, (error, response, body) => {

    if (error) {
      return callback(`The site ${error.hostname} is not reachable.`, null);
    }

    const data = JSON.parse(body);

    data[0] ? callback(null, data[0].description) : callback(error, `The result of your breed search for a ${param1} is absent from this index.\nPlease try a different breed.`);
  });
};

module.exports = { fetchBreedDescription };
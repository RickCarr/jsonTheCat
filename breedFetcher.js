const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
  if (error) {
    return console.log(`The site ${error.hostname} is not reachable.`);
  }

  const data = JSON.parse(body);
  data[0] ? console.log(data[0].description) : console.log(`The result of your breed search for a ${breed} is`, error, '(try a different breed.)');
  //  console.log(error);
});
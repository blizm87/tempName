const request = require('request');

function getAll(req, resp) {
  let url = 'http://api.brewerydb.com/v2/breweries';
  let access_token = '154b55a2e97a7540aa3b961e81a7323f';
  request.get(url, (err, resp, body) => {
    console.log(body);
    console.log(resp);
    console.log(err);
  })
}

module.exports = {
  getAll: getAll
}

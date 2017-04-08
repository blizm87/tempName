const request = require('request');

function getAll(req, resp) {
  let url = 'http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino';
  request.get(url, (err, statResp, body) => {
    let result = JSON.parse(body);
    resp.json({data: result})
  })
}

module.exports = {
  getAll: getAll
}

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");

const app = express();


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./api/config/routes.js')

app.use('/api', routes);

const url = 3000;

app.listen(url, () => {
  console.log('I am up and running!!!');
})

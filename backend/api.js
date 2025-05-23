// backend/api.js
const app = require('./server');

module.exports = (req, res) => {
  app(req, res);
};

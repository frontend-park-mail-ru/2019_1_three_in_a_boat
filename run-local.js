process.env.EXPRESS_DEBUG = 'ON';
const app = require('./server/index.js');

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
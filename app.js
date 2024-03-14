const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const ps3Router = require('./routes/ps3.js');

app.use('/ps3', ps3Router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

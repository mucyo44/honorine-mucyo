
const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const numbers = require('./number');
    let total = 0;
    for(let i=0; i<numbers.length; i++) {
      total += numbers[i];
    }
    res.send(`The sum of numbers is ${total}`);
  }

);

app.get('/multiplication', (req, res) => {
  const numbers = require('./array')

    let total = 1;
    for(let i=0; i<numbers.length; i++) {
      total *= numbers[i];
    }
    res.send(`The product of numbers is ${total}`);
  }

);

app.listen(2000, () => {
  console.log('Server running on port 2000...');
});
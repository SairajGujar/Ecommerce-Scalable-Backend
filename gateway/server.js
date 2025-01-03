const express = require('express');
const expressProxy = require('express-http-proxy');

const app = express();

app.use('/user', expressProxy('http://localhost:3001'));

app.use('/products', expressProxy('http://localhost:3002'));

app.use('/cart', expressProxy('http://localhost:3003'));

app.use('/orders', expressProxy('http://localhost:3004'));

app.use('/notification', expressProxy('http://localhost:3005'));

app.listen(3000, () => {
  console.log(`Gateway running on http://localhost:3000`);
});

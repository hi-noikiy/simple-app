const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exchangeRouter = require('./router/exchange');
const rateRouter = require('./router/rate');
const cors = require('cors');

// App setup
const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json())
app.use(cors('*'))

app.use('/exchange', exchangeRouter)
app.use('/rate', rateRouter)

app.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exchangeRouter = require('./router/exchange');

// App setup
const app = express()
const PORT = process.env.PORT || 3333

app.use(bodyParser.json())

app.use('/exchange', exchangeRouter)

app.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})

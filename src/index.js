// This file is: ./src/index.js

//importing the dependencies
const {
  app,
  startDatabase
} = require('./app-common.js')

// endpoint to return top level api
// much like a switch statement
app.get('/', async (req, res) => {
  res.send({
    message: "You have reached the top level route of the store api"
  });
});

app.use('/products', require('./routes/productsRoutes'))
app.use('/logos', require('./routes/logosRoutes'))
app.use('/stores', require('./routes/storesRoute'))
app.use('/variations', require('./routes/variationRoutes'))

// connect to our database
// https://www.mongodb.com/
startDatabase().then(async () => {
  // `then` start the web server after the database starts
  app.listen(3001, async () => {
    console.log('Web server has started on port 3001 http://localhost:3001');
  });
});

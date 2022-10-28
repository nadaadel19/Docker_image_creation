const express = require('express'); //import express package

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express(); //app using express
app.get('/', (req, res) => { // route for display hello world
  res.send('Hello World !!!!!!!');
});

app.listen(PORT, HOST, () => {
  console.log('Application started successfully.');
});

const express = require('express');
const app = express();

app.use(express.static('public')); // Serve files from the 'public' directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serve your HTML file
});
app.get('/details', (req, res) => {
  res.sendFile(__dirname + '/public/porfolio-details.html'); // Serve your HTML file
});


app.get('/portfolio-details.html', (req, res) => {
  const productName = req.query.product;

  
  // Now you can use the 'productName' variable to fetch details from your data
  // and render the appropriate content
  // ...
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});





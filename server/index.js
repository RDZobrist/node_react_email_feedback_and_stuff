const express = require('express');

// intialize express
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});



const PORT =  process.env.PORT || 8088
app.listen(PORT);
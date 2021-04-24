const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.json({message: "Novos cadastros"})
})
 
app.listen(3333)
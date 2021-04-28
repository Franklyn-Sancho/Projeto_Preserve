const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req, res, next) {
  res.json({message: "Novos cadastros", dados: seja})
})

const seja = []
app.post('/seja', (req, res, next) => {
  console.log("Novo Cadastro")
  seja.push({
    nome: req.body.Name,
    email: req.body.Email,
    senha: req.body.Password
  })
  res.json({message: "cadastro enviado", dados: seja})
})

 
app.listen(3333, function() {
  console.log('backend running')
})
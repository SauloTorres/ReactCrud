const porta = 3001

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados  = require('./bancodedados')
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req, res) => {
    res.send("Hello World")
    console.log("aaaa")
})

app.get('/usuarios',(req, res) => {
    res.send(bancoDeDados.getUsuarios())
})
app.get('/usuarios/:id', (req, res) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/usuarios',(req,res) =>{
    const produto = bancoDeDados.salvarUsuario({
       email: req.body.email,
        password: req.body.password
    })
    res.send(produto)
   //res.send("AAAAAAAA")
   //res.redirect("https://google.com")
})

app.put('/usuarios/:id',(req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/usuarios/:id',(req,res,next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta,()=>{
    console.log('funcionou')
})
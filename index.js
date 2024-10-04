import express from 'express'
const app = express()

app.use(express.json())

const users = []

// METODOS DE APIRESTFULL (ULTILIZA TODAS AS BOAS PRATICAS) => GET, PUSH, PUT(ATUALIZA DOMENTOS INTEIROS)/PATCH(ALTUALIZA POR CAMPO) , DELETE
// NAME =>  /HELLO (NOMES DE ROTAS SEMPRE PRECISAM SER NO PLURAL)
// CALLBACK FUNCTIONS => ONDE EXECULTAMOS O BACKEND (REGRA DE NEGOCIOS, LOGICA)

app.post('/users', (req, res) => {
  const body = req.body
  users.push(body)
  res.status(201).send("Usuário criado com sucesso")

})

app.get("/users", (req, res)=>{
  res.send({users})
})



app.listen(3000, () => { console.log("Server is running on port 3000")})
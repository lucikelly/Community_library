import express from 'express'
import userRouters from './src/routes/user.routes.js'
import "dotenv/config"

const app = express()

app.use(express.json())
app.use(userRouters)

const port = process.env.PORT || 3000

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`)
})
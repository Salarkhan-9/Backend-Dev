require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter",(req,res)=>{
    res.send("salar054")
})
app.get('/login',(req,res)=>{
  res.send('<h1>Login here</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
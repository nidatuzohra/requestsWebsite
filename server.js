import express from 'express'
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.post('/heart-rate', (req, res) =>{
  const currentHRM = req.body.currentHRM
  console.log(currentHRM)
  res.json({requestBody: req.body})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
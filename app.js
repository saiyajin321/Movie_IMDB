const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./routers')
const { errorHandler } = require('./middleware/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use(router)


router.use(errorHandler)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT ||  3000
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
  
  app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
  })

const cors = require('cors')
const express = require('express')
const axios = require('axios')

const app = express()
app.use(cors())

app.get('/', async(req, res) => {
  try {
    // Data is the response.data from axios
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
    return res.json({ data })

  } catch (error) {
    console.log(error)
  }
})

app.listen(8888);
const express = require('express')
const app = express()

app.get('/', (req, res) => {
console.log('here')
res.send('escape')
})

app.listen(3000)
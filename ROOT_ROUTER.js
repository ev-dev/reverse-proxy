const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use('/', (req, res) => {
	res.redirect('http://localhost:3001/')
})


const PORT = 80
app.listen(PORT, () => {
	console.log(`\n - [ROOT ROUTER] - Port: ${PORT} - Listening...\n`)
})
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(require('volleyball'))

app.use('/', (req, res) => {
	res.redirect('127.0.01:3001/')
})


const PORT = 80
app.listen(PORT, () => {
	console.log(`\n - [ROOT ROUTER] - Port: ${PORT} - Listening...\n`)
})
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	if (req.url === '/tickets') {
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html')
		fs.readFile('./index.html', 'utf8', (err, data) => {
			res.end(data)
		})
	} else if (req.url === '/global.css') {
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/css')

		fs.readFile('./global.css', 'utf8', (err, data) => {
			res.end(data)
		})
	} else if (req.url === '/script.js') {
		console.log('ESTO SE EJECUTA EN EL SERVIDOR')
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/javascript')

		fs.readFile('./script.js', 'utf8', (err, data) => {
			res.end(data)
		})
	} else {
		res.statusCode = 404
		res.end('RECURSO NO ENCONTRADO')
	}
})

server.listen(3000, () => {
	console.log('Server on...')
})

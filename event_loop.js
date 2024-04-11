const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Welcome!')
		return res.end()
	}

	if (req.url === '/about') {
		for (let i = 0; i < 1000; i++) {
			console.log(Math.random() * i)
		}

		return res.end('About us')
	}

	res.end('Not Found')
})

server.listen(3000)
console.log('Server listening on port 3000')

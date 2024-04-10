const http = require('http')

const server = http.createServer((req, res) => {
	console.log(req.url)

	if (req.url === '/') {
		res.write('Home page')
		return res.end()
	}

	if (req.url === '/about') {
		res.write('About us')
		return res.end()
	}

	res.write(
		`<h1>Not Found</h1>
            <p>The site does not exist</p>
            <a href="/">Back to home page</a>`
	)
	res.end()
})

server.listen(3000)

console.log('Server listening on port 3000')

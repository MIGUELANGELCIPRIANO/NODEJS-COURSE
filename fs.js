const fs = require('fs')

// SYNC

const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

const text = 'My third commit '

fs.writeFileSync('./data/third.txt', text, {
	flag: 'a',
})

// ASYNC

fs.readFile('./data/first.txt', (error, data) => {
	error ? console.log(error) : console.log(data.toString())

	fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
		error ? console.log(error) : console.log(data)

		fs.writeFile('./data/fourth.txt', 'My fourth commit', (error, data) => {
			error ? console.log(error) : console.log(data)
		})
	})
})

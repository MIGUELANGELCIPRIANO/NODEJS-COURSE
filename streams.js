const { writeFile } = require('fs/promises')

const createBigFile = () => {
	writeFile('data/big_file.txt', 'Hello world! '.repeat(100000))
}

createBigFile()

const { createReadStream } = require('fs')

const stream = createReadStream('./data/big_file.txt', {
	encoding: 'utf-8',
})

stream.on('data', (chunk) => {
	console.log(chunk)
})

stream.on('end', () => {
	console.log('Finished')
})

stream.on('error', (error) => {
	console.log(error)
})

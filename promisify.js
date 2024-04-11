const { readFile } = require('fs')
const { promisify } = require('util')

const readFilePromise = promisify(readFile)

const read = async () => {
	try {
		const firstResult = await readFilePromise('./data/first.txt')
		const secondResult = await readFilePromise('./data/second.txt')
		const thirdResult = await readFilePromise('./data/third.txt')
		const fourthResult = await readFilePromise('./data/fourth.txt')

		console.log(firstResult.toString())
		console.log(secondResult.toString())
		console.log(thirdResult.toString())
		console.log(fourthResult.toString())
	} catch (error) {
		console.log(error)
	}
}

read()

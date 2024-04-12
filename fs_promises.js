const { readFile } = require('fs/promises')

const read = async () => {
	try {
		const firstResult = await readFile('./data/first.txt')
		const secondResult = await readFile('./data/second.txt')
		const thirdResult = await readFile('./data/third.txt')
		const fourthResult = await readFile('./data/fourth.txt')

		console.log(firstResult.toString())
		console.log(secondResult.toString())
		console.log(thirdResult.toString())
		console.log(fourthResult.toString())
	} catch (error) {
		console.log(error)
	}
}

read()

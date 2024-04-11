const { readFile } = require('fs')

const getText = (pathFile) => {
	return new Promise((resolve, reject) => {
		readFile(pathFile, (error, data) => {
			error ? reject(error) : resolve(data.toString())
		})
	})
}

const read = async () => {
	try {
		const firstResult = await getText('./data/first.txt')
		const secondResult = await getText('./data/second.txt')
		const thirdResult = await getText('./data/third.txt')
		const fourthResult = await getText('./data/fourth.txt')

		console.log(firstResult)
		console.log(secondResult)
		throw new Error('Test error')
		console.log(thirdResult)
		console.log(fourthResult)
	} catch (error) {
		console.log(error)
	}
}

read()

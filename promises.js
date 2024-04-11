const { readFile } = require('fs')
const { get } = require('http')

const getText = (pathFile) => {
	return new Promise((resolve, reject) => {
		readFile(pathFile, (error, data) => {
			error ? reject(error) : resolve(data.toString())
		})
	})
}

getText('./data/fourth.txt')
	.then((result) => console.log(result))
	.then(() => getText('./data/first.txt'))
	.then((result) => console.log(result))
	.catch((error) => console.log(error))

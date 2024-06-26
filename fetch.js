// Promises

// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error))


// Async-Await

// const loadData = async () => {
// 	try {
// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// 		const data = await res.json()
// 		console.log(data)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
// loadData()


// Top Level Await

try {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()
	console.log(data)
} catch (error) {
	console.log(error)
}

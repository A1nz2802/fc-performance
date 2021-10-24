// archivo independiente, ejecutarlo con node aparte

// memoization
const memo = (fn) => {
	const memory = {}

	return (a) => {
		if (memory[a]) {
			console.log('sacando de la memoria')
			return memory[a]
		}

		console.log('computando')
		memory[a] = fn(a)
		return memory[a]
	}
}

/* ########################################################## */

const fn = memo((iterador) => {
	let total = 1
	for (let i = 0; i < iterador; i++) {
		total = total * iterador
	}

	return total
})

console.time('sin memo')
fn(5000000)
fn(5010000)
fn(5020000)
fn(5030000)
fn(5040000)
console.timeEnd('sin memo')

console.time('con memo')
fn(5000000)
fn(5010000)
fn(5020000)
fn(5030000)
fn(5040000)
console.timeEnd('con memo')

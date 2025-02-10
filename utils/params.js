// JavaScript program to get the function
// name/values dynamically
function getParams(func) {

	// String representation of the function code
	let str = func.toString();

	// Remove comments of the form /* ... */
	// Removing comments of the form //
	// Remove body of the function { ... }
	// removing '=>' if func is arrow function 
	str = str.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/\/\/(.)*/g, '')
		.replace(/{[\s\S]*}/, '')
		.replace(/=>/g, '')
		.trim();

	// Start parameter names after first '('
	let start = str.indexOf("(") + 1;

	// End parameter names is just before last ')'
	let end = str.length - 1;

	let result = str.substring(start, end).split(", ");

	let params = [];

	result.forEach(element => {

		// Removing any default value
		element = element.replace(/=[\s\S]*/g, '').trim();

		if (element.length > 0)
			params.push(element);
	});

	return params;
}

module.exports = getParams;

/* Test sample functions
let fun1 = function (a) { };

function fun2(a = 5 * 6 / 3, b) { };

let fun3 = (a, b, c) => { };

console.log(`List of parameters of ${fun1.name}:`, 
	getParams(fun1));
console.log(`List of parameters of ${fun2.name}:`, 
	getParams(fun2));
console.log(`List of parameters of ${fun3.name}:`, 
	getParams(fun3));
*/
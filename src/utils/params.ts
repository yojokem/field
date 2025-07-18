// 이거 변수 하나인 경우에 괄호 없이 정의된 anonymous function 같은 것들은 어떻게 처리할 수가 없네?

// JavaScript program to get the function
// name/values dynamically
export function getParams(func: Function) {

	// String representation of the function code
	let str = func.toString().trim();

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
	let end = str.indexOf(")")/*str.length - 1*/;

	let result = str.substring(start, end).split(", ");

	let params: string[] = [];

	result.forEach(element => {

		// Removing any default value
		element = element.replace(/=[\s\S]*/g, '').trim();

		if (element.length > 0)
			params.push(element);
	});

	return params;
}

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
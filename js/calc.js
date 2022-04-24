// Initialize variables

let input1 = 0;
let input2 = 0;
let output = 0;

// BASIC
function add(inputA, inputB) {
	return inputA + inputB;
}

function subtract(inputA, inputB) {
	return inputA - inputB;
}

function multiply(inputA, inputB) {
	return inputA * inputB;
}

function divide(inputA, inputB) {
	return inputA / inputB;
}

function modulus(inputA, inputB) {
	return inputA % inputB;
}

function square(input) {
	return input ** 2;
}

function exponent(inputA, inputB) {
	return inputA ** inputB;
}

function root(input) {
	return Math.sqrt(input); 
}

// maybe no go
function both_root(inputA, inputB) {

}

// maybe no go
function log(base, input) {

}

function log2(input) {
	return Math.log2(input);
}

function log10(input) {
	return Math.log10(input);
}

function ln(input) {
	return Math.log(input);
}

// FACTORIALS
function factorial(input) {
	let temp = 1;
	for (let x = 1; x < input + 1; x++) {
		temp = temp * x;
	}
	return temp;
}

// input a >= input b
function combination(inputA, inputB) {
	return (divide(factorial(inputA), multiply(factorial(inputB), factorial(inputA - inputB))));
}

// input a >= input b
function permutation(inputA, inputB) {
	return (divide(factorial(inputA), factorial(inputA - inputB)));
}

// SERIES
function series_prime_numbers(input) {

}

function series_fibbonacci(input) {

}

function series_square(input) {

}

function series_triangle(input) {

}

function series_pentagonal(input) {

}

function series_hexagonal(input) {

}

function series_central_polygonal(input) {

}

function series_magic_square(input) {

}

function series_catalan(input) {

}

function series_pi(input) {

}

// COMPARATORS
function equals(inputA, inputB) {
	return inputA == inputB;
}

function less_than(inputA, inputB) {
	return inputA < inputB;
}

function less_than_equals(inputA, inputB) {
	return inputA <= inputB;
}

function greater_than(inputA, inputB) {
	return inputA > inputB;
}

function greater_than_equals(inputA, inputB) {
	return inputA >= inputB;
}

// TRIG
function sine(input) {
	return Math.sin(input);
}

function cosine(input) {
	return Math.cos(input);
}

function tangent(input) {
	return Math.tan(input);
}
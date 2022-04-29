// Initialize variables

let input1 = 0;
let input2 = 0;
let output = 0;

function update_input() {
	input1 = parseInt(document.getElementById("inputA").value);
	input2 = parseInt(document.getElementById("inputB").value);
	add(input1, input2);
	subtract(input1, input2);
	multiply(input1, input2);
	divide(input1, input2);
	modulo(input1, input2);
	square(input1);
	exponent(input1, input2);
	root(input1);
}

// BASIC
function add(inputA, inputB) {
	document.getElementById("Addition").innerHTML = input1 + " + " + input2;
	document.getElementById("Additionresult").innerHTML = inputA + inputB;
}

function subtract(inputA, inputB) {
	document.getElementById("Subtraction").innerHTML = input1 + " - " + input2;
	document.getElementById("Subtractionresult").innerHTML = inputA - inputB;
}

function multiply(inputA, inputB) {
	document.getElementById("Multiplication").innerHTML = input1 + " * " + input2;
	document.getElementById("Multiplicationresult").innerHTML = inputA * inputB;
}

function divide(inputA, inputB) {
	document.getElementById("Division").innerHTML = input1 + " / " + input2;
	document.getElementById("Divisionresult").innerHTML = inputA / inputB;
}

function modulo(inputA, inputB) {
	document.getElementById("Modulo").innerHTML = input1 + " % " + input2;
	document.getElementById("Moduloresult").innerHTML = inputA % inputB;
}

function square(inputA) {
	document.getElementById("Square").innerHTML = input1 + "^2 ";
	document.getElementById("Squareresult").innerHTML = inputA ** 2;
}

function exponent(inputA, inputB) {
	document.getElementById("Exponent").innerHTML = input1 + "^" + input2;
	document.getElementById("Exponentresult").innerHTML = inputA ** inputB;
}

function root(inputA) {
	document.getElementById("Root").innerHTML = "√" + input1;
	document.getElementById("Rootresult").innerHTML = Math.sqrt(inputA);
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

// Constant arrays



// Functions
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
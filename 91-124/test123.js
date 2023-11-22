let test1 = true;
let test2 = true;

if (test1 || test2 ) {
	console.log('+++');
} else {
	console.log('---');
}

let test3 = true;
let test4 = true;

if (test3 || !test4) {
	console.log('+++');
} else {
	console.log('---');
}

let test5 = true;
let test6 = true;

if (!test3 || !test4) {
	console.log('+++');
} else {
	console.log('---');
}

let test7 = true;
let test8 = true;

if (test3 || test4) {
	console.log('+++');
} else {
	console.log('---');
}

let test9 = true;
let test10 = true;
let test11 = true;

if (test9 || test10 || test11 ) {
	console.log('+++');
} else {
	console.log('---');
}

let test12 = true;
let test13 = true;
let test14 = true;

if (test12 === true || !test13  || !test14 ) {
	console.log('+++');
} else {
	console.log('---');
}
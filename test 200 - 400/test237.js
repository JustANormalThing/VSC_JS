let arr = [
	function() {return 1;},
	function() {return 2;},
	function() {return 3;},
];

let arr1 = [
	function() {
		return 1;
	},
	function() {
		return 2;
	},
	function() {
		return 3;
	},
];
console.log(arr1[2]());

let arr2 = [
	function() {
		return 1;
	},
	function() {
		return 2;
	},
	function() {
		return 3;
	},
];
console.log(arr2[2]() + arr2[1]() + arr2[0]());


let arr3 = [
	function() {return 1;},
	function() {return 2;},
	function() {return 3;},
];
for (let func of arr3) {
	console.log(func());
}
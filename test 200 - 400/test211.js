//let arr = [-1, -2, 4, 5];
//function isPositive(arr) {
	//for (let elem of arr) {
		//if (elem < 0) {
			//return false;
		//}
	//}
	
	//return true;
//}
//let res = isPositive(arr);
//console.log(res);

//let arr = 5;
//function isPositive(arr) {
		//if (arr < 0) {
			//return false;
		//}
	
	//return true;
//}
//let res = isPositive(arr);
//console.log(res);

let arr = [1, 1, 4, 5];
function isPositive(arr) {
	let j = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[j]) {
			return false;
		}
		j++
	}
	
	return true;
}
let res = isPositive(arr);
console.log(res);
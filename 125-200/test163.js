let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

let arr1 = [4];
let flag1 = false;

for (let elem1 of arr1) {
	if (elem1 == elem1/1 || elem1 == elem1/ elem1) {
		flag1 = true;
		break;
	}
}

if (flag1 === true) {
	console.log('+++');
} else {
	console.log('---');
}
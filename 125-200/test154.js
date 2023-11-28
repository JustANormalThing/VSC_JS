let arr = [2,6,8,2,0];

for (let elem of arr) {
	if (elem == 0) {
		console.log('есть');
		break; // выйдем из цикла
	}
}

let arr1 = [2,6,8,2,0,4,8,-1.-4];

for (let elem1 of arr1) {
	if (elem1 == '-1') {
		console.log(elem1 + elem1 + elem1);
		break; // выйдем из цикла
	}
}
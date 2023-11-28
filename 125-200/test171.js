let arr = [[1, 2, 3], [4, 5], [6]];
for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem + subArr);
	}
}

let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let subArr1 of arr1) {
	for (let elem1 of subArr1) {
		console.log(elem1 + subArr1);
	}
}
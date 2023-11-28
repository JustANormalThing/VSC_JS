let arr = [[1, 2, 3], [4, 5], [6]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j] + arr[i][j]);
	}
}

let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let i = 0; i < arr1.length; i++) {
	for (let j = 0; j < arr1[i].length; j++) {
		console.log(arr1[i][j] + arr1[i][j]);
	}
}
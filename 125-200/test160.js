let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] * arr[i];
}

console.log(arr);

let arr1 = [1, 2, 3, 4, 5];

for (let a = 0; a < arr1.length; a++) {
	arr1[a] -= 1;
}

console.log(arr1);

let arr2 = [1, 2, 3, 4, 5];

for (let b = 0; b < arr2.length; b++) {
	arr2[b] += 10;
}

console.log(arr2);
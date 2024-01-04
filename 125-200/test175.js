let arr = [];

for (let i = 0, k = 1; i < 4; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 2; j++) {
		arr[i].push(k++);
	}
}

console.log(arr);

let arr1 = [];

for (let a = 0, c = 2; a < 4; a++) {
	arr1[a] = [];
	
	for (let b = 0; b < 3; b++) {
		arr1[a].push(c++);
        c++;
	}
}

console.log(arr1);

let arr2 = [];

for (let x = 0, t = 1; x < 3; x++) {
	arr2[x] = [];
	
	for (let d = 0; d < 3; d++) {
		arr2[x][d] = t;
		t++;
	}
}

console.log(arr2);

let arr3 = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr3[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr3[i][j] = k;
		k++;
	}
}

console.log(arr3);

let arr4 = [];
let t = 1;

for (let i = 0; i < 3; i++) {
	arr4[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr4[i][j] = t;
		t++;
	}
}

console.log(arr4);

let arr5 = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr5[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr5[i][j] = k;
        k++;
	}
}

console.log(arr5);

let arr6 = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr6[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr6[i][j] = k;
        k++;
	}
}

console.log(arr6);
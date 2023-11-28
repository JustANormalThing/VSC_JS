for (let i = 0; i <= 10; i++) {
	console.log(i);
}

for (let a = 10; a > 0; a--) {
	console.log(a);
}

for (let b = 10; b > 0; b--) {
	console.log(b);
}

let c = 0;

while (c <= 10) {
	console.log(c);
	c++;
}

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	arr[elem] = arr[elem] * arr[elem];
}

console.log(arr);

let obj = {a: '1', b: '2', c: '3'};
let sum = 0;

for (let elem in obj) {
    if (elem[0] + elem[1]  + elem[2]);
	   sum += +elem;
}

console.log(sum);
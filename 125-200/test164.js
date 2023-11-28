let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let i = 0; i <arr.length; i++) {
	if (arr[i].toString().charAt(0) === '1' || arr[i].toString().charAt(1) === '1') {
		sum += arr[i];
	}
}

console.log(sum);

for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	
	if (( str[0] === '1' || str[0] === '2' || str[0] === '3' || str[0] === '4' || str[0] === '5' || str[0] === '6' || str[0] === '7' || str[0] === '8' || str[0] === '9' )) {
		console.log(i);
	}
}

for (let a = 10; a <= 1000; a++) {
	let str1 = String(a); // преобразуем число в строку
	console.log(str1[0] + str1[1]);
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	
	if (str[0] === '1') {
		console.log(i);
	}
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	
	if ( concat(str[0] + str[1] == '5')) {
		console.log(i);
	}
}
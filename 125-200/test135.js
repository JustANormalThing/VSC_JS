let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

let age1 = 17;
let adult1;

if (age1 >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);

let age2 = 17;
let res;

if (age2 >= 18) {
	if (age2 <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);

let age3 = 19;
let res2;

if (age3 >= 18) {
	res2;
	
	if (age3 <= 23) {
		res2 = 'от 18 до 23';
	} else {
		res2 = 'больше 23';
	}
} else {
	res2 = 'меньше 18';
}

console.log(res2);
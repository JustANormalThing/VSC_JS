let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}
}

console.log(arr);

let arr1 = [];

for (let i = 0; i < 3; i++) {
	arr1[i] = []; // создаем подмассив
	
	for (let j = 0; j < 4; j++) {
		arr1[i].push('x'); // заполняем подмассив числами
	}
}

console.log(arr1);

let arr2 = [];

for (let a = 0; a < 3; a++) {
	arr2[a] = []; // создаем подмассив
	
	for (let b = 0; b < 5; b++) {
		arr2[a].push(b + 1); // заполняем подмассив числами
    }

        for (let c = 0; c < 5; c++) {
            arr2[a].push(c + 1);
        }
	
}

console.log(arr2);
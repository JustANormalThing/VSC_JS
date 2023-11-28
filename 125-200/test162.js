let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	obj[key] = obj[key] * obj[key];
}
console.log(obj);

let obj1 = {x: 1, y: 2, z: 3};
for (let key1 in obj1) {
	obj1[key1] = obj1[key1] + 1;
}
console.log(obj1);
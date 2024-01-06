function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  
  console.log(arr);

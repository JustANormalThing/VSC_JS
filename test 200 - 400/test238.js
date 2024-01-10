let obj = {
	func1: function() {return 1;},
	func2: function() {return 2;},
	func3: function() {return 3;},
};

console.log(obj.func1() + obj.func2() + obj.func3()); 

let obj1 = {
	func1: function() {return 1;},
	func2: function() {return 2;},
	func3: function() {return 3;},
};
for (let key in obj1) {
  console.log(obj1[key]());
}
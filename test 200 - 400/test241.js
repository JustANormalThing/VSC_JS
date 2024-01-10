function test(func1, func2, func3) {
	return func1() + func2() + func3();
}


function func1() {
	return 1;
  }
  
  function func2() {
	return 2;
  }
  
  function func3() {
	return 3;
  }
  
  test(func1, func2, func3); 

  const func1 = function() {
	return 1;
  };
  
  const func2 = function() {
	return 2;
  };
  
  const func3 = function() {
	return 3;
  };
  
  test(func1, func2, func3);
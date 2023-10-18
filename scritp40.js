let test = Boolean(3);
alert(test);
//true
let test = Boolean(0);
alert(test);
//false
let test = Boolean(-1);
alert(test);
//true
let test = Boolean(-0);
alert(test);
//false
let test = Boolean(+0);
alert(test);
//false
let test = Boolean('abc');
alert(test);
//true
let test = Boolean('');
alert(test);
//false
let test = Boolean('0');
alert(test);
//true
let test = Boolean(true);
alert(test);
//false
let test = Boolean(false);
alert(test);
//false
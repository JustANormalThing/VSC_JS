//1

function sumArray(arr)
{ 
  if (!Array.isArray(arr))
{ 
    return "Error: input is not an array";
 } 
  let sum = 0;
  for (let i = 0; i < arr.length; i++) 
  {
  sum += arr[i];
  }
  return sum;
}

//2

function sumRatio(arr1, arr2) 
{
  let sum1 = sumArray(arr1);
  let sum2 = sumArray(arr2);
  if (sum2 === 0) 
{ 
   return "Error: division by zero";
 } 
  return sum1 / sum2;
}

function sumArray(arr) 

{ 
 if (!Array.isArray(arr)) 
{
    return "Error: input is not an array";
}  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) 
{ 
   sum += arr[i];
 } 
  return sum;
}

//3

function multiplyArray(arr) 
{
  let product = 1;
  for (let i = 0; i < arr.length; i++) 
{ 
   product *= arr[i];
 } 
  return product;
}

//4

//function addZero(num) 
//{
  //if (num < 10) 
//} 
   //return "0" + num;
//{ 
  //else 
//{
    //return num;
//}  
//}

//5

//function getSum(arr) 
  //let sum = 0;
  //for (let i = 0; i < arr.length; i++) 
    //sum += arr[i];
  
  //return sum;


//6

//function capitalizeWords(str) 
  //let words = str.split(" ");
  //for (let i = 0; i < words.length; i++) 
    //words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  
  //return words.join(" ");


//7

//function fillArray(n) 
  //let arr = [];
  //for (let i = 1; i <= n; i++) 
    //arr.push(i);
  
  //return arr;


//8

//function sumDigits(num) 
 //let sum = 0;
  //let str = num.toString();
  //for (let i = 0; i < str.length; i++) 
   //sum += parseInt(str[i]);
  
 // return sum;


//9

//function isLeapYear(year) 
  //if (year 
   // return true;
   //else 
    //return false;
  


//10

//function secondsToDays(seconds) 
  //let days = Math.floor(seconds / (24 * 60 * 60));
  //return days;


//11

//function getRandomElement(arr) 
  //let randomIndex = Math.floor(Math.random() * arr.length);
  //return arr[randomIndex];


//12

//function isPrime(num) 
  //if (num < 2) 
    //return false;
  
  //for (let i = 2; i <= Math.sqrt(num); i++) 
    //if (num 
      //return false;
    
  
  //return true;
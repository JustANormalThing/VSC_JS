let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

employees.forEach(function(employee) {
	console.log(employee.name + ' - ' + employee.salary);
  });

  let employees2 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

employees.forEach(function(employee2) {
    let sum = 0;
	console.log(employee2.salary);
  });

  let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let totalSalary = 0;
  
  employees.forEach(function(employee3) {
	if (employee3.age >= 30) {
	  totalSalary += employee3.salary;
	}
  });
  
  console.log(totalSalary);
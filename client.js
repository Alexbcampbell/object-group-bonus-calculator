$(document).ready(readyNow);
function readyNow() {
  console.log('jq');
  $('#runButton').on('click', addByButton);
}
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];
//END OF ARRAY
let employeeBonuses = [];

for (let i = 0; i < employees.length; i++) {
  bonusCalculator(employees[i]);
}
function addByButton() {
  for (let i = 0; i < employees.length; i++) {
    bonusCalculator(employees[i]);
  }
}
function bonusCalculator(employee) {
  let ratingBonus;
  employeeBonuses = [];

  if (employee.reviewRating <= 2) {
    ratingBonus = 1;
  }
  if (employee.reviewRating === 3) {
    ratingBonus = 1.04;
  }
  if (employee.reviewRating === 4) {
    ratingBonus = 1.06;
  }
  if (employee.reviewRating === 5) {
    ratingBonus = 1.1;
  }
  if (employee.employeeNumber.length === 4) {
    ratingBonus += 0.05;
  }
  if (employee.annualSalary > 65000) {
    ratingBonus -= 0.01;
  }
  if (ratingBonus > 1.13) {
    ratingBonus = 1.13;
  }
  if (ratingBonus < 1) {
    ratingBonus = 1;
  }
  employeeBonuses.push({
    name: employee.name,
    bonusPercentage: parseInt(parseFloat((ratingBonus - 1) * 100).toFixed(2)),
    totalCompensation: parseInt(
      parseFloat(employee.annualSalary * ratingBonus).toFixed(2)
    ),
    totalBonus: parseInt(
      parseFloat(ratingBonus * employee.annualSalary) - employee.annualSalary
    ),
  });
  console.log(employeeBonuses);
  addToList();
}

function addToList() {
  console.log('Working');
  const listUpdater = $('#list');
  for (employee of employeeBonuses) {
    listUpdater.append(
      '<li>' +
        employee.name +
        ':' +
        ' Bonus percentage : ' +
        employee.bonusPercentage +
        '% Total compensation : $' +
        employee.totalCompensation +
        ' Total bonus : $' +
        employee.totalBonus +
        '</li>'
    );
  }
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// button worked before but we broke it re working the function

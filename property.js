const person = {
  name: `A Rahman Shaoib`,
  age: 25,
  profession: `developer`,
  salary: `BDT2,50,000`,

  married: false,
};
// console.log(person);
//"DOT" notation (dot symbol diye object er property er value access kora)
// console.log(person.married);
const marriedStatus = person.married;
// console.log(marriedStatus);

//
//
//
//
//// bracket notation( third bracket diye value access kora)

console.log(person[`salary`]);
const tahaa = person[`salary`];
console.log(tahaa);

const person = {
  name: `A Rahman Shaoib`,
  age: 25,
  profession: `developer`,
  salary: `BDT2,50,000`,
  married: false,
  "fav places": [`bandarban`, `coxsbazar`, `kuakata`],
};
person.salary = 300000;
person[`age`] = 27;
person[`fav places`] = [`maldives`, `italy`, `New zealand`];
// console.log(person[`fav places`]);

const propName = `profession`;
person[propName] = `devOPs`;

console.log(person);

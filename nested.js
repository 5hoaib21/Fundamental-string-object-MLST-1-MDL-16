const college = {
  name: `vnc`,
  class: [`10`, `12`],
  events: [`science fair`, `bijay dibos`],
  unique: {
    color: `blue`,
    result: {
      gpa: 5,
      merit: `top`,
    },
  },
};
college.unique.result.merit = `top top top top top most`;
console.log(college.unique.result.merit);
college.events[1] = `16 December`;
console.log(college.events[1]);
delete college.class;
console.log(college);

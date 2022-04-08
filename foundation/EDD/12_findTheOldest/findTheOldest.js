const findTheOldest = function(people) {
  let oldestPerson = {};
  let max = 0;
  people.forEach((person) => {
    let death;
    if (!Object.prototype.hasOwnProperty.call(person, 'yearOfDeath')) death = new Date().getFullYear();
    else death = person.yearOfDeath;
    let age = death - person.yearOfBirth;
    if (age > max) {
      max = age;
      oldestPerson = Object.assign({}, person);
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

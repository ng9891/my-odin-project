const findTheOldest = function(people) {
  const getAge = (birth, death)=>{
    const deathYear = death ? death : new Date().getFullYear();
    return deathYear - birth;
  }

  return people.reduce((acc, person) => {
    const agePerson = getAge(person.yearOfBirth, person.yearOfDeath)
    const ageAcc = getAge(acc.yearOfBirth, acc.yearOfDeath)
    return agePerson > ageAcc ? person : acc;
  });
};

const findTheOldest2 = function(people) {
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

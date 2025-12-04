function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function (arr) {
  return arr.reduce((oldest, person) => {
    const curr = getAge(person.yearOfBirth, person.yearOfDeath);
    const prev = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    return curr > prev ? person : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;

const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const palindromes = function (string) {
  const clean = string
    .split("")
    .filter((char) => alphanumerical.includes(char))
    .join("");
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
};
console.log(palindromes("banab"));
console.log(palindromes("banaba"));

// Do not edit below this line
module.exports = palindromes;

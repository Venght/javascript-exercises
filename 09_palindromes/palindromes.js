const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const newString = string
    .toLowerCase()
    .split('')
    .filter((index) => alphanumerical.includes(index))
    .join('');

    const reverseString = newString.split('').reverse().join('');

    return reverseString == newString;
};

// Do not edit below this line
module.exports = palindromes;

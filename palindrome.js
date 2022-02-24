function palindrome_check(str) {
    var strReverse = str.split('').reverse().join('');
    if (str == strReverse) {
        return `${str} is a palindrome.`;
    }
    else{
        return `${str} is not a palindrome.`;
    }
}
console.log(palindrome_check("nursesrun"));
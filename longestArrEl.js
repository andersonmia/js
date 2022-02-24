var longest = '';
const Longest_Country_Name = (array) => {
    var arr = array;
    for (let i = 0; i < array.length; i++) {
        if (arr[i] > longest) {
            longest = arr[i];
        }
    }
    return longest;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
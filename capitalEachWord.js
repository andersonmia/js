function upperStrConvert(str) {
    var arr = str.split(' ');
    var result = '';
    for (let i = 0; i < arr.length; i++) {
        var string = arr[i].toString();
        var res = string[0].toUpperCase() + string.substr(1);
        result += " " + res;
    }
    console.log(result);
}
upperStrConvert("the quick brown fox");
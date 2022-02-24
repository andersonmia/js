function longfinder(str) {
    var arr = str.split(' ');
    var longWord ='';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longWord.length) {
            longWord = arr[i];
        }
        console.log(longWord);
    }
}
longfinder("web development with php");
console.log(res);
const arranger = (arr) => {
    var sort = arr.sort(function (a, b){return a-b});
    var secondlowest = sort[1];
    var secondgreatest = sort[arr.length - 2];
    console.log(`The 2nd lowest number is ${secondlowest} and the 2nd greatest is ${secondgreatest}`);
}
arranger([12,6,5,76,45]);
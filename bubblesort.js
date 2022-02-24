const bubble_sort = (array) =>{
    var arr = array;
    var sortedArray = arr.sort(function(a, b){return b-a});
    return sortedArray;
}
console.log(bubble_sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
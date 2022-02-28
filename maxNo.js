function find_max(nums) {
let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
for (let num of nums) {
    if (num > max_num) {
 max_num = num;
 }
}
console.log( max_num);
}
find_max([2,5,6,1,8,12]);
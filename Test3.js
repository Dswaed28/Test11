let nums = [0, 0, 11, 22, 3, 4, 0];
let count = 0;

for (let i = 0; i < nums.length; i++) nums[i] == 0 ? ++count : (count = count);

console.log(count);

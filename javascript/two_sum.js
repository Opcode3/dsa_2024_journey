// PROBLEM URL
// https://leetcode.com/problems/two-sum/


// Test cases 
// TC-1 
// var nums = [2, 7, 11, 15], target = 9;
// TC-2 
// var nums = [3,2,4], target = 6;
// TC-3
var nums = [3,3], target = 6;

var twoSum = function (nums, target) {
  for (let m = 0; m < nums.length; m++) {
    const mIndex = nums[m];
    for (let n = m+1; n < nums.length; n++) {
      const nIndex = nums[n];
      if (mIndex + nIndex == target) {
        return [m, n];
      }
    }
  }
  return [];
};

console.log(twoSum(nums, target));

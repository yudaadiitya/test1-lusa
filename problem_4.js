/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    var max = nums[0];
    var cache = 1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0){
            cache = 1;
            max = Math.max(max, 0);
        } else {
            cache *= nums[i];
            max = Math.max(max, cache);
            // console.log(max)
        }
    }
    cache = 1;
    result = []
    for ( i = nums.length - 1; i > 0; i--) {
        if (nums[i] === 0){
            cache = 1;
            max = Math.max(max, 0);
            // console.log(max)
        } else {
            cache *= nums[i];
            console.log(result)
            max = Math.max(max, cache);
        }
    }
    return  max; 
}

let number = [-6,4,-5,8,-10,0,8];
console.log(`the maximum product sub-array is having product ${maxProduct(number)}`)
     
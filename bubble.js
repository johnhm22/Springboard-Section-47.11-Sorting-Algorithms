
// bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// bubbleSort([1, 2, 3]); // [1, 2, 3]
// bubbleSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
//     23, 2, 453, 546, 75, 67, 4342, 32
// ];

function bubbleSort(nums) {
    for(let i=0; i< nums.length; i++){
        let swap = false;
        while(!swap){
       for(let j=0; j<nums.length-i; j++){
        if(nums[j] > nums[j+1]){
            let temp = nums[j+1];
            nums[j+1] = nums[j]
            nums[j] = temp;
            swap = true;
            } 
            }if(!swap) break;
       } 
    } 
    return nums;
}


module.exports = bubbleSort;
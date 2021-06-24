// Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with values from both arrays sorted
// let arr1 = [1,3,4,5];
// let arr2 = [2,4,6,8];
// merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i])
            i++;
        }
        else{
            results.push(arr2[j])
            j++;
        }
    }
while(i < arr1.length){
    results.push(arr1[i]);
    i++
}
while(j < arr2.length){
    results.push(arr2[j]);
    j++
}
    return results;
}


// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. Here’s some guidance for how merge sort should work:
// Break up the array into halves until you can compare one value with another
// Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
// Once the array is merged back together, return the merged (and sorted!) array
// In order to implement this function, you’ll also need to implement a merge function that takes in two sorted arrays and returns a new sorted array. You implemented this function in the previous exercise, so use that function!
// mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let midPoint = Math.floor((arr.length)/2)
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint));
    return merge(left, right);
}

module.exports = { merge, mergeSort};
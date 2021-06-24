/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

/*
In this exercise, your goal is to implement a function called pivot. This function contains nearly all of the logic you’ll need in order to implement Quick Sort in the next exercise.

The pivot function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It’s also helpful if this helper returns the index of where the pivot value winds up.
*/

// let arr = [4, 2, 5, 3, 6];
// pivot(arr); // 2
// const arr = [3, 2, 4, 5, 6];

function pivot(arr){
    let pivotVal = arr[0]
    // let pivotIdx = 0;
    let tempArr = [];
    tempArr.push(pivotVal);
    for(let i=0; i<arr.length; i++){
        if(arr[i] < pivotVal){
            tempArr.unshift(arr[i]);
        }
        else if(arr[i] > pivotVal){
            tempArr.push(arr[i])
        }
    } 
    pivotIdx = tempArr.indexOf(arr[0]);
    arr = tempArr;
    return pivotIdx;
}


/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports = {pivot, quickSort};
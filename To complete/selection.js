// Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// If the “minimum” is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.

// selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]

function selectionSort(arr) {
    let minIndex;
    for(let i=0; i<arr.length; i++){
        let minVal = arr[i];
        let minValStart = arr[i];
            for(let j=0; j < arr.length; j++){
                if(minVal>arr[i+j+1]){
                    minVal = arr[i+j+1];
                    minIndex = i+j+1;
                    }
               } 
       if(minVal != minValStart){
          let temp = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = temp;
           }
       } return arr;
    }

module.exports = selectionSort;
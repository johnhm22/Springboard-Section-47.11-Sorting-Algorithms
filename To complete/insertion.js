// Start by picking the second element in the array (we will assume the first element is the start of the “sorted” portion)
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.

// insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]

function insertionSort(arr) {
    for(let i=0; i < arr.length; i++){
        let swap = false
        while(!swap){
        for(let j=0; j<arr.length; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swap = true;
                }
            }
        } if(!swap) break
    } return arr;
}

module.exports = insertionSort;
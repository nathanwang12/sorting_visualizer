export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        let pi = doPartition(mainArray, startIdx, endIdx, animations);
        quickSortHelper(mainArray, startIdx, pi - 1, animations);
        quickSortHelper(mainArray, pi + 1, endIdx, animations);
    }
    
}

function doPartition(mainArray, startIdx, endIdx, animations) {

    let pivot = mainArray[endIdx];
    let i = startIdx - 1;

    for (let j = startIdx; j < endIdx; j++) {
        
        if (mainArray[j] < pivot) {

            i++;
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, mainArray[j]]);
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([j, mainArray[i]]);
            swap(mainArray, i, j);
        }
    }
    i++;
    animations.push([i, endIdx]);
    animations.push([i, endIdx]);
    animations.push([i, mainArray[endIdx]]);
    animations.push([i, endIdx]);
    animations.push([i, endIdx]);
    animations.push([endIdx, mainArray[i]]);
    swap(mainArray, i, endIdx);
    return i;



}

function swap(mainArray, i, j) {
    const temp = mainArray[i];
    mainArray[i] = mainArray[j];
    mainArray[j] = temp;
}







/*

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
    console.log(startIdx, endIdx);
    if (startIdx === endIdx) return;
    let pi = doPartition(mainArray, startIdx, endIdx, animations);
    quickSortHelper(mainArray, startIdx, pi - 1, animations);
    quickSortHelper(mainArray, pi + 1, endIdx, animations);
}*/
/*
function doPartition(mainArray, startIdx, endIdx, animations) {
    let pivot = mainArray[endIdx];
    let piv_index = startIdx - 1;
    for (let j = startIdx; j < endIdx - 1; j++) {
        // change color of comparison
        animations.push([j, endIdx]);
        // revert color of comparison
        animations.push([j, endIdx]);
        if (mainArray[j] < pivot) {
            piv_index++;
            //
            animations.push([piv_index, mainArray[j]]);
            animations.push([j, mainArray[piv_index]]);
            doSwap(mainArray, piv_index + 1, j);
        }
    }
    piv_index++;
    // change color of comparison
    animations.push([piv_index, endIdx]);
    // revert color of comparison
    animations.push([piv_index, endIdx]);
    animations.push([piv_index, pivot]);
    animations.push([endIdx, mainArray[piv_index]]);

    doSwap(mainArray, piv_index, endIdx);
    return piv_index + 1;
}

function doSwap(mainArray, pivIdx, endIdx) {
    const temp = mainArray[endIdx];
    mainArray[endIdx] = mainArray[pivIdx];
    mainArray[pivIdx] = temp;
}

*/
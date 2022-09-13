export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    let pi = doPartition(mainArray, startIdx, endIdx, auxiliaryArray, animations);
    quickSortHelper(mainArray, startIdx, pi - 1, auxiliaryArray, animations);
    quickSortHelper(mainArray, pi + 1, endIdx, auxiliaryArray, animations);
}

function doPartition(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    let pivot = mainArray[endIdx];
    let piv_index = startIdx - 1;
    for (let j = startIdx; j < endIdx; j++) {
        // change color of comparison
        animations.push([j, endIdx]);
        // revert color of comparison
        animations.push([j, endIdx]);
        if (mainArray[j] < pivot) {
            piv_index++;
            //
            animations.push([piv_index, mainArray[j]]);
            doSwap(mainArray, piv_index + 1, j);
        }
    }
    piv_index++;
    // change color of comparison
    animations.push([piv_index, endIdx]);
    // revert color of comparison
    animations.push([piv_index, endIdx]);
    animations.push([piv_index, pivot]);
    animations.push([endIdx, ])
    doSwap(mainArray, piv_index, endIdx);
    return piv_index + 1;
}


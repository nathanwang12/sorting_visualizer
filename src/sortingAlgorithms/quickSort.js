export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}



function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        let pi = doPartition(array, startIdx, endIdx, animations);
        quickSortHelper(array, startIdx, pi - 1, animations);
        quickSortHelper(array, pi + 1, endIdx, animations);
    }
    
}

function doPartition(array, startIdx, endIdx, animations) {

    let pivot = array[endIdx];
    let i = startIdx - 1;

    for (let j = startIdx; j < endIdx; j++) {
        
        if (array[j] < pivot) {

            i++;
            recordAnimations(array, i, j, animations);          
            swap(array, i, j);
        }
    }
    i++;
    recordAnimations(array, i, endIdx, animations);
    swap(array, i, endIdx);
    return i;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function recordAnimations(array, i, j, animations) {
    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, array[j]]);
    animations.push([j, i]);
    animations.push([j, i]);
    animations.push([j, array[i]]);
}




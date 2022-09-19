export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(array, animations) {
    let n = array.length - 1;
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < n - i; j++) {
            if (array[j] > array[j + 1]) {
                recordAnimations(array, j, j + 1, animations);
                swap(array, j, j + 1);
            }
        }
    }
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
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

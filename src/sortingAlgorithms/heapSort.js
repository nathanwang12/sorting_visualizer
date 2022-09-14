export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSortHelper(array, animations);
    return animations;
}

function heapSortHelper(array, animations) {

    const n = array.length;

    for (let i = n / 2 - 1; i >= 0; i--) {
        heapify(array, n, i, animations);
    }

    for (let i = n - 1; i > 0; i--) {
        processAnimations(array, 0, i, animations);
        processAnimations(array, i, 0, animations);
        swap(array, 0, i);
        heapify(array, i, 0, animations);
    }
}

function heapify(array, N, i, animations) {
    
    let root = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    
    if (l < N && array[l] > array[root]) {
        root = l;
    }

    if (r < N && array[r] > array[root]) {
        root = r;
    }

    if (root != i) {

        processAnimations(array, i, root, animations);
        processAnimations(array, root, i, animations);
        swap(array, i, root);
        heapify(array, N, root, animations);
        
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function processAnimations(array, i, j, animations) {
    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, array[j]]);
}
import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSort.js'
import './SortingVisualizer.css';

// Constants

const ANIMATION_SPEED_MS = 3;
const NUMBER_OF_ARRAY_BARS = 120;
const PRIMARY_COLOR = '#222';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 630));
            
        }
        
        this.setState({array});

    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
    }

    render() {
        const {array} = this.state;

        return (
            <div className="content-container">
                <div className="title">
                    <h1>Sorting Algorithm Visualizer</h1>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div className="array-bar" key={idx}
                        style={{height: `${value}px`}}
                        >
                        </div>
                    ))} 
                </div>
                <div className="button-container">
                    <button className="visualizer-function" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="visualizer-function" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="visualizer-function" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="visualizer-function" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className="visualizer-function" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
            
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i <arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}
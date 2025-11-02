**Interview Challenge**
Merge Discontinuous Time Ranges
Problem Description

You are given an array of time ranges representing when a system was active. Each range is an array [start, end] where: start and end are UNIX timestamps in milliseconds.

The range includes start and excludes end. For example the range [0,5] will include 0 but exclude 5 so the numbers in the range are 0,1,2,3,4

However:

Ranges may overlap or touch.
Some may be separated by small gaps.
Gaps smaller than a given threshold (in milliseconds) should be treated as continuous and merged.
Implement a NodeJS module which exports a function mergeTimeRanges such that it merges all such ranges into non-overlapping, sorted intervals.

Requirements:

Implement the solution in JavaScript.
Your solution should be clean, readable, and modular.
External libraries are not required but if you choose to use them make sure to provide the package.json file.
You may assume the input as a JSON array will be provided to your NodeJS Module.
The code should be submitted as a NodeJS module. The module template is provided below in NodeJS Module Signature section

NodeJS Module Signature

/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  // Your code here
}

module.exports = {
	mergeTimeRanges
}

Submission Timeline
Candidates will be considered in the order of assignment submission. Please submit your assignment as soon as possible.

Few Example Input / Output
Example 1

const module = require('./my-module.js')
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;

console.log(module.mergeTimeRanges(ranges, threshold));
Expected Output:

[
  [1000, 2000],
  [2500, 4100],
  [8000, 9500]
]
Example 2

const module = require('./my-module.js')
const ranges = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold = 4;

console.log(module.mergeTimeRanges(ranges, threshold));
Expected Output:

[
  [0, 10],
  [15, 20],
  [25, 30]
]
Example 3

const module = require('./my-module.js')
const ranges = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold = 3;

console.log(module.mergeTimeRanges(ranges, threshold));
Expected Output:

[
  [0, 35]
]

/**
 * Merges discontinuous time ranges within a given threshold.
 *
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */
const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  // Step 1: Sort by start
  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let current = ranges[0];

  // Step 2: Merge logic
  for (let i = 1; i < ranges.length; i++) {
    const next = ranges[i];
    if (next[0] <= current[1] + threshold) {
      current[1] = Math.max(current[1], next[1]);
    } 
    else {
      merged.push(current);
      current = next;
    }
  }

  // Step 3: Push the final range
  merged.push(current);

  return merged;
};

module.exports = { mergeTimeRanges };

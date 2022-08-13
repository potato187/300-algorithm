/**
 * @param {number[]} numbs
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (numbs) {
	for (let i = 0, maxLen = numbs.length; i < maxLen; i++) {
		for (let j = i + 1; j < maxLen; j++) {
			if (numbs[i] === 0) {
				[numbs[i], numbs[j]] = [numbs[j], numbs[i]];
			}
		}
	}
};

console.log(moveZeroes([0, 1, 3, 0, 12]));

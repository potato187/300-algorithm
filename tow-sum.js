/**
 * @param {number[]} numbs
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbs, target) {
	let indexResult = -1;
	let result = [];
	for (let index = 0, length = numbs.length; index < length; index++) {
		if (index + 1 > length) continue;

		indexResult = numbs.indexOf(target - numbs[index], index + 1);

		if (indexResult > -1) {
			result.push(index, indexResult);
			break;
		}
	}
	return result;
};

console.log(twoSum([3, 2, 4], 6));

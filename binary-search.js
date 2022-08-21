var binarySearch = (arr, target, low, high) => {
	if (low > high) return -1;
	const mid = low + Math.floor((high - low) / 2);
	const value = arr[mid];

	if (target === value) return mid;

	return target > value ? binarySearch(arr, target, mid + 1, high) : binarySearch(arr, target, low, mid - 1);
};

/**
 * @param {number[]} arrNumbs
 * @param {number} target
 * @return {number}
 */
var search = function (arrNumbs, target) {
	let len = arrNumbs.length - 1;
	return binarySearch(arrNumbs, target, 0, len);
};

console.log(search([2, 5, 3], 2));

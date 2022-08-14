var missingNumber = function (arr) {
	const maxLen = arr.length;
	let total = (maxLen * (maxLen + 1)) / 2;
	for (let i = 0; i < maxLen; i++) {
		total -= arr[i];
	}
	return total;
};

missingNumber([1, 0, 3]);

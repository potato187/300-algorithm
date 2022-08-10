var maxSubArray = function (numbs) {
	let max = numbs[0];
	let total = numbs[0];
	for (let index = 1, len = numbs.length; index < len; index++) {
		total += numbs[index];

		if (total > max) {
			max = total;
		}

		if (total < 0) {
			total = numbs[index];
		}
	}
	return [max];
};

console.log(maxSubArray([-2, -1, -3, -4]));

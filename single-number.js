var singleNumber = function (numbs) {
	let max_len = numbs.length;
	let finder = 0;

	for (let index = 0; index < max_len; index++) {
		finder ^= numbs[index];
	}
	return finder;
};

console.log(singleNumber([1, 1, 3, 3, -2]));

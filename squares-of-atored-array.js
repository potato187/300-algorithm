var sortedSquares = function (arrNumbs) {
	const maxLen = arrNumbs.length;
	const mid = arrNumbs.findIndex((number) => number >= 0);

	if (mid === 0) return arrNumbs.map((number) => number ** 2);

	let temp = [];
	let len = arrNumbs.length;

	if (mid === -1) {
		len = len - 1;
		while (len >= 0) {
			temp.push(arrNumbs[len] ** 2);
			len--;
		}
		return temp;
	}

	let left = mid - 1;
	let right = mid;

	while (left >= 0 && right < len) {
		if (Math.abs(arrNumbs[left]) <= arrNumbs[right]) {
			temp.push(arrNumbs[left] ** 2);
			left--;
		} else {
			temp.push(arrNumbs[right] ** 2);
			right++;
		}
		console.log(left, right);
	}

	while (left >= 0) {
		temp.push(arrNumbs[left] ** 2);
		--left;
	}

	while (right < len) {
		temp.push(arrNumbs[right] ** 2);
		++right;
	}

	return temp;
};

console.log(sortedSquares([-4]));

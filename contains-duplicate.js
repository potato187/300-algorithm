var containsDuplicate = function (nums) {
	const mid = Math.ceil(nums.length / 2);
	const contain = {};

	for (let i = 0; i < mid; i++) {
		contain[nums[i]] = contain[nums[i]] ? ++contain[nums[i]] : 1;
		contain[nums[mid + i]] = contain[nums[mid + i]] ? ++contain[nums[mid + i]] : 1;
	}
	for (let key in contain) {
		if (contain[key] > 1) return true;
	}

	return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
	let prev = 1;
	let prev2 = 1;

	for (let i = 2; i <= n; i++) {
		let current = prev + prev2;
		prev2 = prev;
		prev = current;
	}

	return prev;
};

console.log(climbStairs(3));

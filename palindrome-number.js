/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (int) {
	if (int < 0) return false;
	if (int === 0) return true;
	let numbs = int,
		palindrome = "",
		step = 0;

	while (numbs > 0) {
		palindrome += numbs % 10;
		numbs = Math.floor(numbs / 10);
	}

	console.log(palindrome);
	return parseInt(palindrome) === int;
};

console.log(isPalindrome(0));

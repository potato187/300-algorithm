/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
	const stack = [s[0]];

	for (let index = 1, len = s.length; index < len; index++) {
		let str = stack.at(-1) + s[index];
		if (str === "()" || str === "[]" || str === "{}") {
			stack.pop();
		} else {
			stack.push(s[index]);
		}
	}
	return stack.length === 0;
};

console.log(isValid("(])"));

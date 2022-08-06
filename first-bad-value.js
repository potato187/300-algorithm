/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let beg = 1,
			last = n,
			pos = 1;
		while (beg <= last) {
			const mid = Math.floor(beg + (last - beg) / 2);
			const check = isBadVersion(mid);
			if (check) {
				pos = mid;
				last = mid - 1;
			} else {
				beg = mid + 1;
			}
		}
		return pos;
	};
};

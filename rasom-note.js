/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const result = {};
	const max_len = Math.max(ransomNote.length, magazine.length);

	for (let index = 0; index < max_len; index++) {
		let char_ransom = ransomNote[index];
		let char_magazine = magazine[index];

		if (char_magazine) {
			result[char_magazine] = result[char_magazine] ? ++result[char_magazine] : 1;
		}

		if (char_ransom) {
			result[char_ransom] = result[char_ransom] ? --result[char_ransom] : -1;
		}
	}

	for (let key in result) {
		if (result[key] < 0) {
			return false;
		}
	}
	return true;
};

canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi");

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	const chars = {};
	for (let index = 0, len = s.length; index < len; index++) {
		chars[t[index]] = chars[t[index]] ? ++chars[t[index]] : 1;
		chars[s[index]] = chars[s[index]] ? --chars[s[index]] : -1;
	}

	for (let key in chars) {
		if (chars[key] !== 0) return false;
	}

	return true;
};

console.log(isAnagram("anagram", "anagram"));

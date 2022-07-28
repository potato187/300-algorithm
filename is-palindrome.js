var isPalindrome = function (s) {
	const str = s.replace(/[^a-zA-Z\d]/gi, "").toLowerCase();
	console.log(str);
	return s === str.split("").reverse("").join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

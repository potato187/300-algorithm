const symbol = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

const romanToInt = (s) => {
	const arr_roman = [...s].map((char) => symbol[char]);
	let year = 0;
	for (let index = 0, len = arr_roman.length; index < len; index++) {
		if (index + 1 < len && arr_roman[index] < arr_roman[index + 1]) {
			year += arr_roman[index] * -1;
		} else {
			year += arr_roman[index];
		}
	}
	return year;
};

console.log(romanToInt("MCMXCIV"));

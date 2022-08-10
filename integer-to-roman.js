const symbol = {
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M",
};

const decode = (numbs, step) => {
	if (numbs === 1) {
		return symbol[10 ** step];
	}
	if (numbs === 9) {
		return symbol[10 ** step] + symbol[10 ** (step + 1)];
	}
	if (numbs > 5) {
		return symbol[5 * 10 ** step] + symbol[10 ** step].repeat(numbs - 5);
	}

	if (numbs === 5) {
		return symbol[5 * 10 ** step];
	}

	if (numbs === 4) {
		return symbol[10 ** step] + symbol[5 * 10 ** step];
	}

	return symbol[10 ** step].repeat(numbs);
};

var intToRoman = function (numb) {
	let years = [];
	step = 0;

	while (numb > 0) {
		let temp = numb % 10;
		years.push(decode(temp, step));
		++step;
		numb = Math.floor(numb / 10);
	}
	return years.reverse().join("");
};

console.log(intToRoman(58));

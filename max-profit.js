var maxProfit = function (prices) {
	let buy = prices[0],
		profit = 0;

	for (let i = 1, len = prices.length; i < len; i++) {
		if (buy > prices[i]) {
			buy = prices[i];
		} else if (prices[i] - buy > profit) {
			profit = prices[i] - buy;
		}
	}

	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

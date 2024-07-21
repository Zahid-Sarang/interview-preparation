function stockSell(prices) {
	let max_profit = 0;
	let buy = prices[0];

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < buy) {
			buy = prices[i];
		} else if (prices[i] - buy > max_profit) {
			max_profit = prices[i] - buy;
		}
	}

	return max_profit;
}

const array = [7, 1, 5, 3, 8, 4];
// const array = [7, 6, 4, 3, 2, 1];
const result = stockSell(array);

console.log(result);

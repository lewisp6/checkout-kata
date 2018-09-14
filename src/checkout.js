const R = require('ramda');
const prices = require('./itemPrices');
const discounts = require('./discounts');

const checkout = {
  scan: (items = ['NA']) => {
    const calculateTotal = R.compose(R.sum, R.values, R.props);
    const total = calculateTotal(items, prices);
    const discountsForItems = discounts.findDiscountsForItems(items);
    const totalWithDiscount = R.ap([R.subtract(total)], R.values(discountsForItems));
    return R.head(totalWithDiscount);
  },
};

module.exports = checkout;

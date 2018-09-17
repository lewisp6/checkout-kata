const R = require('ramda');
const prices = require('./itemPrices');
const discounts = require('./discounts');

const checkout = {
  scan: (items = ['NA']) => {
    const calculateTotal = R.compose(R.sum, R.values, R.props);
    const total = calculateTotal(items, prices);
    const discountsForItems = discounts.getDiscountValue(items);
    const totalWithDiscount = R.subtract(total, discountsForItems);
    return totalWithDiscount;
  },
};

module.exports = checkout;

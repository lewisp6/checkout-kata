const R = require('ramda');
const prices = require('./itemPrices');
const discounts = require('./discounts');

const checkout = {
  scan: (items = ['NA']) => {
    const calculateTotal = R.compose(R.sum, R.values, R.props);
    const discountValue = discounts.getDiscountValue(items);
    const totalWithDiscount = R.subtract(calculateTotal(items, prices), discountValue);
    return totalWithDiscount;
  },
};

module.exports = checkout;

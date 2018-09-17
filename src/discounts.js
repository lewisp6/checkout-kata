const R = require('ramda');

const rules = {
  A: { discountAmount: 20, quantity: 3 },
  B: { discountAmount: 15, quantity: 2 },
};

function calculateDiscountAmount(rule, quantity) {
  const amount = R.pluck(['discountAmount'], rule);
  const ruleQuantity = R.pluck(['quantity'], rule);
  const calculateDiscount = (Math.floor(R.divide(quantity, ruleQuantity))) * amount;
  return R.isEmpty(ruleQuantity) ? 0 : calculateDiscount;
}

function findDiscount(quantity, item) {
  const matchQuantity = rule => R.filter(R.where({ quantity: R.gte(quantity) }))(rule);
  const pullDiscountAmount = matchedRule => calculateDiscountAmount(matchedRule, quantity);

  const findRuleDiscountValue = R.compose(pullDiscountAmount, matchQuantity, R.props);
  return findRuleDiscountValue(item, rules);
}

const discounts = {
  getDiscountValue: (items) => {
    const itemsWithDiscounts = R.pick(R.keys(rules), R.countBy(R.toUpper)(items));
    const calcDiscountValue = R.compose(R.sum, R.values, R.mapObjIndexed(findDiscount));
    return calcDiscountValue(itemsWithDiscounts);
  },
};

module.exports = discounts;

const R = require('ramda');

const rules = {
  A: { discountAmount: 20, quantity: 3 },
  B: { discountAmount: 20, quantity: 3 },
};

function findDiscount(quantity, item) {
  const matchQuantity = rule => R.find(R.propEq('quantity', quantity))(rule);
  const pullDiscountAmount = matchedRule => R.path(['discountAmount'], matchedRule) || 0;

  const findRuleDiscountValue = R.compose(pullDiscountAmount, matchQuantity, R.props);
  return findRuleDiscountValue(item, rules);
}

const getAllApplicableDiscounts = itemsWithDiscounts => (R.isEmpty(itemsWithDiscounts)
  ? { NONE: 0 }
  : R.mapObjIndexed(findDiscount, itemsWithDiscounts));

const discounts = {
  findDiscountsForItems: (items) => {
    const itemsWithDiscounts = R.pick(R.keys(rules), R.countBy(R.toUpper)(items));
    return getAllApplicableDiscounts(itemsWithDiscounts);
  },
};

module.exports = discounts;

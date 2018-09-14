# Checkout Kata

The goal is to code a supermarket POS checkout that handles different pricing schemes.

We have various items for sale and some of them have special prices:

```
  Item   Unit      Special
         Price     Price
  --------------------------
    A     50       3 for 130
    B     30       2 for 45
    C     20
    D     15

```

The checkout accepts items in any order, if we scan B, an A then another B we'll recognise two B's and price them at 45 (for a total price of 95). Because pricing changes frequently we need to be able to pass a set of pricing rules each time we handle a checkout transaction.

Implement code that calculates the total for a set number of items.

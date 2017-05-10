var test = require("ava").test;
var singularOrPlural = require("./singular-or-plural");

test("singularOrPlural()", function (t) {
  var singular = "unicorn";
  var plural = "unicorns";

  t.is(singularOrPlural(1, singular, plural), "unicorn", "should work with one");
  t.is(singularOrPlural(2, singular, plural), "unicorns", "should work with more than one");
  t.is(singularOrPlural(11, singular, plural), "unicorns", "should work with eleven");
  t.is(singularOrPlural(101, singular, plural), "unicorn", "should work with values *ending in* one");
  t.is(singularOrPlural(111, singular, plural), "unicorns", "should work with values *ending in* eleven");

  t.is(singularOrPlural(0, singular, plural), "unicorns", "should work with zero");
  t.is(singularOrPlural(-1, singular, plural), "unicorn", "should work with negative one");
  t.is(singularOrPlural(-2, singular, plural), "unicorns", "should work with negative more than one");
  t.is(singularOrPlural(Infinity, singular, plural), "unicorns", "should work with an infinite number");
  t.is(singularOrPlural(NaN, singular, plural), null, "should not accept non-numbers");
});

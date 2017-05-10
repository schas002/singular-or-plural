function singularOrPlural(count, singular, plural) {
  if (count !== count) {
    return null;
  }
  var value = Math.abs(count);
  return value % 10 === 1 && value % 100 !== 11 ? singular : plural;
}

module.exports = singularOrPlural;

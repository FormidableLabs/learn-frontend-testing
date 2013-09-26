// Camel case a string.
var camelCase = function (val) {
  return val
    .split(/[\-_]/g)
    .map(function (part, idx) {
      // Title case parts, skipping first one.
      if (idx === 0) { return part; }
      return titleCase(part);
    })
    .join("");
};

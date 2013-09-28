// Camel case a string.
var camelCase = function (val) {
  // Uppercase the first character after a dash.
  return val.replace(/-(.)/g, function (m, first) {
    return first.toUpperCase();
  });
};
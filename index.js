module.exports = function teeny(string) {
  if (typeof string !== "string") throw new TypeError("Teeny needs a string!");
  return string.replace(/\s/g, "");
};
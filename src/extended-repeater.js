module.exports = function repeater(str, options) {
  const obj = {
    repeatTimes: 1,
    separator: "+",
    additionSeparator: "|",
  };
  Object.assign(obj, options);
  let add = `${obj.addition}${obj.additionSeparator}`; //addition to str + addition sep
  let res = `${str}${add.repeat(obj.additionRepeatTimes)}${
    obj.separator
  }`.repeat(obj.repeatTimes);
  return res;
};

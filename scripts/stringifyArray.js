const comma = ", ";

export function stringifyArray(arr) {
  if (!Array.isArray(arr)) throw "Error: input argument must be an array.";
  let str = "[";
  arr.forEach((e) => {
    if (Array.isArray(e)) {
      str += stringifyArray(e) + comma;
    } else {
      str += e + comma;
    }
  });
  if (str.length > 1) {
    str = str.substr(0, str.length - comma.length);
  }
  str += "]";
  return str;
}

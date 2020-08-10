export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  /*
  let result = 0;
  for (const element in source) {
    result += parseInt(source[element], 10);
  }
  */
  let result = 0;
  Object.values(source).forEach(element => {
    result += parseInt(element, 10);
  });
  return result;
}

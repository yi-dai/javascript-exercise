export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  function checkStartWith(number) {
    return number.substr(0, 2) === '粤A';
  }
  const collections = collection.filter(checkStartWith);
  return collections.length;
}

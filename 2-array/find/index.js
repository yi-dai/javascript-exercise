export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const collections = collection.filter(element => element.age >= 10 && element.age <= 20);
  if (collections.length === 1) return collections[0].name;
  return collections.map(element => element.name);
}

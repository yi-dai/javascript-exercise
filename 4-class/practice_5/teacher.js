import Person from './person';
// TODO 20: 在这里写实现代码
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const teachClass = this.klass ? `Class ${this.klass}` : 'No Class';
    return `${super.introduce()} I am a Teacher. I teach ${teachClass}.`;
  }
}

export default Teacher;

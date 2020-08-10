import Person from './person';
// TODO 20: 在这里写实现代码
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    let result;
    if (this.klass) {
      result = `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
    } else {
      result = `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return result;
  }
}

export default Teacher;

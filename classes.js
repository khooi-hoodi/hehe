class Human {
  age;
  name;

  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  greetings() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

class Dancer extends Human {
  style;
  constructor(age, name, style) {
    super(age, name);
    this.style = style;
  }

  introduceStyle() {
    console.log(`I do ${this.style}`);
  }
}

const khoi = new Dancer(19, "Khoi", "tutting");
khoi.greetings();
khoi.introduceStyle();

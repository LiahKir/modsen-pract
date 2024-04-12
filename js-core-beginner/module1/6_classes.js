class Person {
  constructor(name, age, country) {
    this.name = name
    this.age = age
    this.country = country
  }
  displayAll() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nCountry: ${this.country}`)
  }
}

const person1 = new Person("Egor", 35, "Peru")
const person2 = new Person("Sergey", 32, "Czech")

person1.displayAll()
person2.displayAll()

class Employee {
    constructor (name,salary){
        this.name = name
        this.salary = salary
    }
    culcYearSalary(){
        return this.salary * 12
    }
}

class Manager extends Employee {
    constructor (name,salary, department){
        super(name,salary)
        this.department = department
    }
    culcYearSalary(){
        return this.salary * 12 * 1.2
    }
}

let manager1 = new Manager("Ivan", 2000, "Finance")
let manager2 = new Manager("Dmitriy", 1400, "Communications")

console.log(manager1.culcYearSalary());
console.log(manager2.culcYearSalary());
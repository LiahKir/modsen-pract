class Rectangle{
    constructor (height, width){
        this.height = height
        this.width = width
    }
    perimeter() {
        return (this.height + this.width) * 2
    }
    area() {
        return this.height * this.width
    }
}

rectangle = new Rectangle (4, 10)

console.log(rectangle.perimeter()); 
console.log(rectangle.area());
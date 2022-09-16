class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        console.log(`${this.name} ${this.surname}`)
    }
}
let date = new Date();
date = date.getFullYear();

class Student extends User {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    getCourse(){
        if(this.year > (date - 5)){
        console.log((date + 1) - this.year)
        }else console.log(`Graduated from college in ${this.year + 5}`);
    }
}

let user = new User("Elmira", "Valiyeva");
let student = new Student("Elmira", "Valiyeva", 2019);
let student2 = new Student("Madina", "Zhalimbetova", 2021);
let student3 = new Student("Aslan", "Abdygaliyev", 2015);

student.getFullName();
student.getCourse();
student2.getFullName();
student2.getCourse();
student3.getFullName();
student3.getCourse();

class Rectangle {
    constructor(width, height){
        this.width = width + "px";
        this.height = height + "px";
    };
    setWidth(){
        this.width = +prompt("введите ширина")  + "px";
    };
    getWidth(){
        return this.width;
    };
    setHeight(){
        this.height = +prompt("введите высота") + "px";
    };
    getHeight(){
        return this.height;
    };
}
 let rectangle = new Rectangle(200, 350);
 console.log(rectangle);
 rectangle.setWidth();
 alert(rectangle.getWidth());
 rectangle.setHeight();
 alert(rectangle.getHeight());
 console.log(rectangle);



var student1={
    name:'Muhammed Shan',
    age: 13,
    city: 'Kerala',
    country: 'Japan',
    food: 'Fried Rice'
};

console.log(student1);


var student2=new Object();
student2.name='Abhiraj';
student2.age='13';
student2.city='Katal';
student2.country='UK';
student2.food='meals';

var student5=new Object();
student5.name='Nida';
student5.age='14';
student5.city='Delhi';
student5.country='Switzeland';
student5.food='Biriyani';

console.log(student5);
console.log(student5.country);
console.food(student5.food);

delete student5.city;
console.log(student5);

console.log(student2);
console.log(student2.country);
console.log(student2.food);


console.log(student1.city);
console.log(student1.country);
console.log(student1.food);

student1.school='DPS';
console.log(student1);

delete student1.city;
console.log(student1);

delete student2.food;
console.log(student2);

var student3={
    fName: "Jane",
    lName: "Doe",
    fullName: function() {
        return this.fName + " " + this.lName;
    }
};

var student4={
    fName: "Noushad",
    lName: "Jabbar",
    fullName: function() {
        return this.fName + " " + this.lName;
    }
}

console.log(student3.fullName())
console.log(student3.fullName)

console.log(student4.fullName())
console.log(student4.fullName)
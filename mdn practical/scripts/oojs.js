const person = {
    name: ["Happiness", "Isaac"],
    age: 32, 
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hola!👋 I'm ${this.name}.`);
    },
};




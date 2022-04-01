interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}
let lucas: Human;
lucas = {
    firstName: 'Lucas',
    age: 32,
    greet() {
        console.log('Hello!')
    },
};

class Instructor implements Human {
    firstName: string = 'Lucas';
    age: number = 37;
    greet() {
        console.log('Hello"');
    }
}
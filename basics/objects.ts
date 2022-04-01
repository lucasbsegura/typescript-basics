let person: { 
    name: string;
    age: number;
};
person = {
    name: 'Lucas',
    age: 37
};

type Person = { 
    name: string;
    age: number;
};
let anotherPerson: Person;
anotherPerson = {
    name: 'Caio',
    age: 28
}

//Arrays of Objects
let people: { 
    name: string;
    age: number;
}[];

let anotherPeople: Person[];

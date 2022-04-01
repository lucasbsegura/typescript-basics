class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

class Student2 {
    //shortcut notation
    constructor(
        public firstName: string,
        public lastName: string,
        public Age: number,
        private courses: string[]
        ) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student2('Lucas', 'Segura', 37, ['Angular']);
student.enrol('React');
student.listCourses();
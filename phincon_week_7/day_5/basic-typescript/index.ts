let fullName: string = "John Doe";
let age: number = 30;
let isStudent: boolean = true;

let data: unknown = {
    fullName: "John Doe",
};
data = {
    runANonExistentMethod: () => {},
} as { runANonExistentMethod: () => void };

if (typeof data === "object" && data !== null) {
    (data as { runANonExistentMethod: Function }).runANonExistentMethod();
}

const names: readonly { name: string; age?: number; gender?: string }[] = [];

let sampleTuple: [string, number, boolean];
sampleTuple = ["hello world", 1, true];

const graph: [x: number, y: number] = [55.2, 41.3];
const [x, y] = graph;

enum CardinalDirections {
    North,
    East,
    South,
    West,
}
let currentDirection = CardinalDirections.East;

type PersonName = {
    firstName: string;
    lastName: string;
};
type Person = {
    name: string;
    age: number;
};
type People = {
    name: string;
    age: number;
    gender: string;
};

const person: People = {
    name: "John Doe",
    age: 30,
    gender: "male",
};

interface Rectangle {
    height: number;
    width: number;
}

interface ColoredRectangle extends Rectangle {
    color: string;
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
};

const newData: { name: string; age: number } = {
    name: "John Doe",
    age: 30,
};

const { name: newDataName, age: newDataAge } = newData;

interface DataPerson {
    name: string;
    age: number;
}

function getData({ name, age }: DataPerson, gender: string): string {
    return `my name is ${name}, my age ${age}, and my gender is ${gender}`;
}

const dataPerson: DataPerson = { name: "John Doe", age: 30 };

getData(dataPerson, "male");

class PersonClass {
    constructor(public readonly name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
}

const personClass = new PersonClass("Jane", 30);
const personName = personClass.getName();
const personAge = personClass.getAge();
console.log(personName);
console.log(personAge);

interface Shape {
    getArea: () => number;
}

class RectangleShape implements Shape {
    public constructor(protected width?: number, protected height?: number, protected color?: string) {}
    public getArea(): number {
        return (this.width ?? 0) * (this.height ?? 0);
    }
}

class CircleShape implements Shape {
    public constructor(protected radius?: number) {}
    public getArea(): number {
        return Math.PI * (this.radius ?? 0) * (this.radius ?? 0);
    }
}

class SquareShape extends RectangleShape {
    public constructor(width: number) {
        super();
    }
}

const squareShape = new SquareShape(10);
const squareArea = squareShape.getArea();
console.log(squareArea);

abstract class ShapeAbstract {
    public constructor(protected width: number) {
        this.width = 0;
    }
    public abstract getArea(): number;
}

class Triangle extends ShapeAbstract {
    public constructor(protected width: number) {
        super(width);
    }
    public getArea(): number {
        return 0;
    }
}

const shape = new Triangle(10);



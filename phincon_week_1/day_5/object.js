const student = {
    name: "John Doe",
    age: 20,
    address: {
        street: "Jalan Raya",
        city: "Jakarta",
    },
    hobbies: ["music", "movies", "art", { name: "reading" }],
    "?height": 175,
    getId: function () {
        return 1;
    },
    sum: function (a, b) {
        return a + b;
    },
    substract: (a, b) => {
        return a - b;
    },
};
student.gender = "male";
student["phone"] = "08123456789";
student["/weight"] = 80;

const keys = Object.keys(student);
const values = Object.values(student);

// console.log(student.getId());
// console.log(student.sum(50, 100));
// console.log(student.substract(50, 100));

const attributes = {
    color: "red",
    backgroundColor: "black",
    fontSize: "16px",
};

console.log(attributes["color"]);

for (let key in attributes) {
    console.log(attributes[key]);
}

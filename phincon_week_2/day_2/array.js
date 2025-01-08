const students = {
    name: "John Doe",
    age: 20,
    gender: "male",
    hobbies: ["reading", "playing games", "coding"],
    address: {
        street: "Jalan Raya",
        city: "Jakarta",
        province: "DKI Jakarta",
        country: "Indonesia",
    },
    friends: [
        {
            name: "Alice",
            age: 19,
            gender: "female",
            hobbies: ["reading", "playing games", "coding"],
            address: {
                street: "Jalan Raya",
                city: "Jakarta",
                province: "DKI Jakarta",
                country: "Indonesia",
            },
        },
        {
            name: "Bob",
            age: 21,
            gender: "male",
            hobbies: ["reading", "playing games", "coding"],
            address: {
                street: "Jalan Raya",
                city: "Jakarta",
                province: "DKI Jakarta",
                country: "Indonesia",
            },
        },
    ],
};

/**
 *
 * Kerjakan soal berikut :
 *
 * 1. Buatlah function untuk looping hobbies dari John Doe
 *
 * 2. Buatlah function untuk looping friends dari John Doe
 *
 * 3. Buatlah function untuk looping hobbies dari Alice
 *
 * 4. Akses semua alamat dari Bob
 *
 * 5. Buatkan function untuk akses semua alamat dari semua teman
 *
 */

/** Jawaban nomor 1 */
const loopJohnDoeHobbies = (hobbies) => {
    for (let index in hobbies) {
        console.log(hobbies[index]);
    }
};

loopJohnDoeHobbies(students.hobbies);

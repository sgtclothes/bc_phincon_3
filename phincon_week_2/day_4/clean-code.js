const student = {
    name: "Sigit",
};
const students = [
    {
        name: "Ibrahim",
        class: "Data Science",
    },
    {
        name: "Tasya",
        class: "Learning Management",
    },
];
const getStudents = () => {
    return students;
};

const getStudent = (name) => {
    return student;
};

/**
 * Buatkan 1 function untuk menambahkan data ke variable students
 */

const addDataToStudents = (student) => {
    students.push(student);
    return students;
};

const updatedStudents = addDataToStudents({
    name: "Rofi",
    class: "Fullstack Javascript",
});

/**
 * Buatkan 1 function untuk menghapus data pada index 0 di variable students
 */

const removeDataFromStudents = () => {
    students.shift();
    return students;
};
const removedStudents = removeDataFromStudents();
console.log(removedStudents);

/**
 * Buatkan 1 function untuk menambahkan data awal ke variable students
 */

const unshiftDataToStudents = (student) => {
    students.unshift(student);
    return students;
};
const unshiftedStudents = unshiftDataToStudents({
    name: "Rafi",
    class: "Fullstack Javascript",
});
console.log(unshiftedStudents);

/**
 * Buatkan 1 function untuk menghapus data pada index terakhir di variable students
 */

const popDataFromStudents = () => {
    students.pop();
    return students;
};
const poppedStudents = popDataFromStudents();
console.log(poppedStudents);

/**
 * Buatkan function untuk menghitung rumus bangun datar
 *
 * 1. Luas Persegi
 * 2. Keliling Persegi
 * 3. Luas Persegi Panjang
 * 4. Keliling Persegi Panjang
 * 5. Luas Lingkaran
 * 6. Keliling Lingkaran
 *
 */

const animals = ["Dog", "Cat", "Rabbit"];
const [animalOne, animalTwo] = animals;

const plant = {
    name: "Mangga",
    color: "Red",
    size: "Big",
    type: "Fruit",
};

const { name: fruitName, color: fruitColor, ...restProperty } = plant;
console.log(fruitColor);

const game = {
    name: "Call of Duty",
    genre: "FPS",
    rating: 4.8,
    price: 100000,
    cities: ["Jakarta", "Bandung", "Surabaya"],
    platforms: ["PC", "PS4", "Xbox"],
    isFree: false,
    developer: {
        name: "Infinity Ward",
        country: {
            name: "USA",
            code: "US",
        },
    },
    publisher: {
        name: "Activision",
        country: "USA",
    },
};

const code = 123;

const {
    price,
    cities,
    developer: {
        country: { code: countryCode },
        name,
    },
} = game;

console.log(code);
console.log(countryCode);

/**
 * Buatlah sebuah fungsi bernama calculateTotal yang menerima parameter pertama berupa string name (nama siswa) dan parameter kedua berupa array angka yang mewakili nilai-nilai ujian.
 * 1. Gunakan rest operator untuk mengambil nilai ujian dari parameter array.
 * 2. Destructuring nama siswa dari parameter pertama.
 * 3. Hitung total nilai ujian dan tampilkan dalam format berikut: "Nama: Alice, Total Nilai: 280"
 * 4. Kembalikan total nilai dari fungsi tersebut.
 */
/* Contoh */
const total = calculateTotal({ name: "Alice", score: [90, 80, 70, 40] });
console.log(total);

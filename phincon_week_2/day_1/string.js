const textOne = "JavaScript is fun!"; //Ubah jadi huruf kecil semua

const textTwo = "hello, world!"; //Ubah jadi huruf besar semua

const textThree = "WELCOME to the Jungle!"; //Ambil kata Jungle, ubah jadi huruf kecil

const firstName = "John"; //Gabung menjadi satu kata
const lastName = "Doe";

const textFour = "I love JavaScript programming!"; //Ambil kata JavaScript nya

const textFive = "   Trim this string!   "; //Hapus spasi di awal dan akhir

const stringNumbers = "12345";

const name = "Sigit";
const gender = "Male";

const sentence = `Hello, my name is ${name}, and I'm a ${gender}.`;

function countWordOccurrences(str, word) {
    const pattern = new RegExp(word, "gi");
    const matches = str.match(pattern);
    return matches ? matches.length : 0;
}

console.log(countWordOccurrences("Hello, world world!", "world"));
const data = 30;

if (data > 100) {
    console.log("Data lebih besar dari 100");
} else if (data < 100 && data > 50) {
    console.log("Data lebih kecil dari 100 dan lebih besar dari 50");
} else {
    console.log("Data lebih kecil dari 100");
}

/**
 *
 * Buatlah function kondisi untuk menentukan nilai huruf dari angka yang diberikan, dengan ketentuan sebagai berikut :
 *
 * A = 90 - 100
 * B = 80 - 89
 * C = 70 - 79
 * D = 60 - 69
 * E = 0 - 59
 *
 */

function scoreGrades(score) {
    if (score >= 90 && score <= 100) {
        console.log("Score nya masuk sini di 90");
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "E";
    }
}

const score = scoreGrades(90);
console.log(score);


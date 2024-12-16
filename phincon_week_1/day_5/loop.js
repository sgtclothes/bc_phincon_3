// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

/**
 *
 * Silahkan buatkan perulangan yang menampilkan angka genap dari 20 sampai 40 dan dari 60 sampai 80 menggunakan 1 perulangan dari 1 sampai 100
 */

function limitNumber(start, end, limit, type = "even") {
    for (let i = 1; i <= limit; i++) {
        if (i >= start && i <= end) {
            if (type === "even") {
                if (i % 2 === 0) {
                    console.log(i);
                }
            } else if (type === "odd") {
                if (i % 2 !== 0) {
                    console.log(i);
                }
            }
        }
    }
}

limitNumber(20, 500, 1000, "odd");

class Games {
    constructor(username) {
        this.games = [
            { id: 1, name: "PUBG" },
            { id: 2, name: "GTA" },
            { id: 3, name: "FIFA" },
        ];
        this.username = username;
    }
    playGames() {
        return this.games;
    }
    playGamesById(id) {
        return this.games.find((item) => item.id == id);
    }
}

const games = new Games("rofi");
console.log(games.playGames());
console.log(games.playGamesById(2));

function GamesFunction(username) {
    this.games = [{ id: 1, name: "PUBG" }];
    this.username = username;
}

const gamesFunction = new GamesFunction("rofi");
console.log(gamesFunction.games);
console.log(gamesFunction.username);

/**
 * Buatlah sebuah class bernama Animal dengan spesifikasi berikut:
 * Properti:
 * name - Nama hewan (string).
 * age - Umur hewan (number).
 * type - Jenis hewan, misalnya "kucing", "anjing" (string).
 * Method:
 * getInfo()
 * Mengembalikan string yang mendeskripsikan hewan dalam format:
 * "Hewan ini adalah [type] bernama [name], berumur [age] tahun."
 * 
 */

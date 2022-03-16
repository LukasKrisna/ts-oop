class Ayam {
    static kaki: number = 2;

    static jalan() {
        console.log(`ayam berjalan dengan ${this.kaki} kaki`)
    }

    getKaki() {
        // console.log(this.kaki)
        console.log(Ayam.kaki)
    }
}

console.log(Ayam.jalan());
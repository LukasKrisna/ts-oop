class Hewan4 {
    nama: string;
    kaki: number;

    constructor(nama: string, kaki: number) {
        this.nama = nama
        this.kaki = kaki
    }
}
const burung = new Hewan4('elang', 2)
console.log(burung)

class Hewan5 {
    constructor(public nama: string, public kaki: number) { }
}

const burung2 = new Hewan5('beo', 2)
console.log(burung2)

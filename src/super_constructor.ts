class Hewan7 {
    nama: string;
    kaki: number;

    constructor(nama: string, kaki: number) {
        this.nama = nama
        this.kaki = kaki
    }
}

class Katak extends Hewan7 {
    beracun: boolean;

    constructor(nama: string, kaki: number, beracun: boolean) {
        super(nama, kaki);
        this.beracun = beracun
    }
}

const katak = new Katak('katak', 4, false);
console.log(katak);
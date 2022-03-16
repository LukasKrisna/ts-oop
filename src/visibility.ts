// public
// protected
// private

class Hewan9 {
    public nama: string;
    private kaki: number;
    protected mamalia: boolean;

    constructor(nama: string, kaki: number, mamalia: boolean) {
        this.nama = nama
        this.kaki = kaki
        this.mamalia = mamalia
    }

    berjalan() {

    }
}

class Katak3 extends Hewan9 {
    private umurTelur: number = 4;
    private umurKecebong: number = 7;
    private umurKatak: number = 90;

    getUmur() {
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak)
    }
}

const katak3 = new Katak3('kodok', 4, false)
console.log(katak3)
katak3.getUmur();

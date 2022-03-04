"use strict";
class Hewan3 {
    constructor() {
        this.nama = '';
        this.kaki = 0;
        this.mamalia = false;
    }
    bernafas() {
        console.log(`${this.nama} sedang bernafas`);
    }
}
const hewan3 = new Hewan3;
console.log(hewan3);
hewan3.nama = 'Kucing';
hewan3.kaki = 4;
hewan3.mamalia = true;
console.log(hewan3);
hewan3.bernafas();

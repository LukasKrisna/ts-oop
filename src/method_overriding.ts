class Hewan8 {
    name: string = '';

    bernafas() {
        console.log('sedang bernafas');
    }
}

class Katak2 extends Hewan8 {
    bernafas() {
        console.log('katak bernafas');
    }
}

const katak6 = new Katak2();
katak6.bernafas();
abstract class Hewan10 {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    makan(): void {
        console.log(`${this.name} sedang makan`);
    }

    abstract bergerak(): void;
}

class Kucing extends Hewan10 {
    constructor() {
        super('kucing')
    }

    bergerak(): void {
        console.log('kucing berjalan')
    }
}

class Burung2 extends Hewan10 {
    constructor() {
        super('kucing')
    }

    bergerak(): void {
        console.log('burung berjalan')
    }
}

const kucing1 = new Kucing();
kucing1.bergerak();
const burung4 = new Burung2();
burung4.bergerak();
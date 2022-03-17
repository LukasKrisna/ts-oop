interface AndroidPhone {
    name: string;

    menu(): void;
    home(): void;
    back(): void;
}

class Samsung implements AndroidPhone {
    name: string;

    constructor(name: string) {
        this.name = name
    }
    menu(): void {
        console.log("tombol menu");
    }
    home(): void {
        console.log("tombol home");
    }
    back(): void {
        console.log("tombol back");
    }

}

class Huawei implements AndroidPhone {
    name: string;

    constructor(name: string) {
        this.name = name
    }
    menu(): void {
        console.log("tombol menu");
    }
    home(): void {
        console.log("tombol home");
    }
    back(): void {
        console.log("tombol back");
    }

}

class GameA {
    private phone: AndroidPhone;

    constructor(phone: AndroidPhone) {
        this.phone = phone
    }

    back() {
        console.log('kembali ke menu utama di game')
    }

    menu() {
        this.phone.menu();
    }

    home() {
        this.phone.home();
    }
}

const samsung = new Samsung('Galaxy S');

const game = new GameA(samsung);

game.home();
game.back();
game.menu();

//---------------------iPhone----------------

interface ApplePhone {
    home(): void;
}

class Iphone implements ApplePhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    home(): void {
        console.log("tombol home");
    }

}

const iphone = new Iphone('iPhone XR');
// const game2 = new GameA(iphone);

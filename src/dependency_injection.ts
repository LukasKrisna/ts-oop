class Store {
    private name: string = 'Store A';
    private profit: number = 1000;

    getName(): string {
        return this.name;
    }
    getProfit(): number {
        return this.profit;
    }
}

class FashionProduct {
    private store: Store;
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class TechProduct {
    private store: Store;
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const baju = new FashionProduct('baju ramones', 250000);
baju.sell();

//--------------------------------------------------------------------

interface IStore {
    name: string;
    profit: number;

    getProfit(): number;
}

class TokoLama implements IStore {
    name: string = 'Toko Lama';
    profit: number = 10000;

    getName(): string {
        return this.name;
    }
    getProfit(): number {
        return this.profit;
    }
}

class TokoBaru implements IStore {
    name: string = 'Toko Baru';
    profit: number = 20000;

    getName(): string {
        return this.name;
    }
    getProfit(): number {
        return this.profit;
    }
}

class MusicProduct {
    private store: IStore;
    private name: string;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = store;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class FoodProduct {
    private store: IStore;
    private name: string;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = store;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const vinyl = new MusicProduct(tokoBaru, 'Ramones Self Titled', 1200000);
const burgir = new FoodProduct(tokoLama, 'Burgir', 10000);

console.log(vinyl);
vinyl.sell();
console.log(burgir);
burgir.sell();
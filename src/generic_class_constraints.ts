interface IProduct {
    sell(): void;
}

class CarProduct implements IProduct {
    sell(): void {
        console.log('jual mobil');
    }
}

class MotorProduct implements IProduct {
    sell(): void {
        console.log('jual motor');
    }
}

function sellProduct<T extends IProduct>(products: T[]): void {
    products.forEach(product => product.sell());
}

const car = new CarProduct();
const motor = new MotorProduct();

sellProduct([car, motor]);
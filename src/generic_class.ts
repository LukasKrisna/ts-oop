interface IGenerics2<T> {
    propA: T

    methodA(): T;
}

class GenericsClass<T> implements IGenerics2<T>{
    propA: T;

    constructor(prop: T) {
        this.propA = prop
    }

    methodA(): T {
        return this.propA;
    }
}

const GenericsClass1 = new GenericsClass<boolean>(true);
console.log(GenericsClass1);
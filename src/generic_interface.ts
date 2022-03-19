interface IGenerics<T> {
    propA: T;
}

function genericFunc<T>(value: T): IGenerics<T> {
    let data: IGenerics<T> = {
        propA: value
    }

    return data;
}

console.log(genericFunc<string>('Generic Interface'));
console.log(genericFunc<number>(12345));
type Generics2<T> = T;

function genericFunc2<T>(value: T): Generics2<T> {
    return value;
}

console.log(genericFunc2<string>('string'));
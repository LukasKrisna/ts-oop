function getProperty<T, U extends keyof T>(params: T, key: U) {
    return params[key];
}

let x = {
    a: 1, b: 2, c: 3, d: 4
};
console.log(getProperty(x, 'a'));
console.log(getProperty(x, 'b'));
console.log(getProperty(x, 'c'));
console.log(getProperty(x, 'd'));
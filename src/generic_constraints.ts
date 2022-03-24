// function generics2<T>(params: T): T {
// console.log(params.length);
//     return params;
// }

interface ILength {
    length: number;

}

function generics2<T extends ILength>(params: T): T {
    console.log(params.length);

    return params;
}

const g2 = generics2('generic constraints');
console.log(g2);

// const g2b = generics2(123);
const g2b = generics2({ length: 10, value: 123 });
function getData(value: any) {
    return value;
}

const data1 = getData('any');
console.log(data1);

//--------------------------------------

function getData2<T>(value: T) {
    return value;
}

const data2 = getData2<string>('generics');
console.log(data2.length);

const data3 = getData2<number>(123.321);
console.log(data3.toFixed(2));
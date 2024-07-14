export {};

const repeatString = (str: string, amount: number) => {
    return str.repeat(amount);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'

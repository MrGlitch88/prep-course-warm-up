export {};

function truncateString(str: string, length: number) {
    return str.slice(0, length);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE

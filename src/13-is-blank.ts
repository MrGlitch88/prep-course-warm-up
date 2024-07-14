export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */

function isBlank(str: string | null | undefined) {
    if (str === null || str === undefined || str.trim() === "") {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("  ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false

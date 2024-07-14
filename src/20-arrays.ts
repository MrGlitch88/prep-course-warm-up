export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */
function stringToArray(arr: string[]) {
    const names: string[][] = [];
    for (let i = 0; i < arr.length; i++) {
        const fullName = arr[i];
        names.push(fullName.split(" "));
    }

    return names.flat();
}

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']

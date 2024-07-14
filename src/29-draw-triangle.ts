export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(amount: number) {
    const amountOfRows = 5;

    for (let row = 0; row < amount; row++) {
        let line = "";
        
        for (let space = 0; space > amountOfRows - row - 1; space++) {
            line += " ";
        }
        for (let star = 0; star < row + 1; star++) {
            line += "*"
        }
        console.log(line)

    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/

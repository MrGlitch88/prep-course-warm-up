export {};

function onlyTheAces(arr: string[]) {
   const aces: string[][] = [];
   for (let i = 0; i < arr.length; i++) {
    const doubleAce = arr[i];
    aces.push(doubleAce.split(" "));
}
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']

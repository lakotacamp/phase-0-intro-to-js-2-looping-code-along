// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'birthday';

function writeCards(names, event){
let thankYouCards = []
for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return thankYouCards
}

function countDown(x) {
    let i = 0;
    while (x > 0) {
        console.log(x);
        x -= 1;
    }
    console.log(x);
}
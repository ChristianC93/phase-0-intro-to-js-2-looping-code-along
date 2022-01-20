const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);


const names = ["Abdur", "Denton", "Robin", "Rich", "Adeel", "Alex"];

const messages = [];

function writeCards(names, birthday) {
    for ( let b = 0; b < names.length; b++) {
        messages.push(`Thank you, ${names[b]}, for the wonderful ${birthday} gift!`);
    }
    return messages;
}

function countDown(number) {
    let n = 10;
    while (n >= 0) {
        console.log(n--);
    }
}
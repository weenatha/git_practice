randomizer = Math.floor(Math.random() * 3);

let messageGenerator = (randomizer) => randomizer === 1 ? "I love you" : randomizer === 2 ? "I miss you" : randomizer === 0 ? "I hate you" : "I like you";
console.log(messageGenerator(randomizer));




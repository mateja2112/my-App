const adjectives =['Smart', 'Pretty', 'Wild', 'Little'];
const nouns=['bear', 'dog', 'cat', 'chicken'];

export function getRandomName(){
    const adjectivesIndex = Math.floor(Math.random()*adjectives.length);
    const nounsIndex = Math.floor(Math.random()*nouns.length);

    return `${adjectives[adjectivesIndex]} ${nouns[nounsIndex]}`;
}

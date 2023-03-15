const adjectives =['lijep', 'zgodan', 'pametan'];
const nouns=['osoba', 'ime', 'nadimak'];

export function getRandomName(){
    const adjectivesIndex = Math.floor(Math.random()*adjectives.length);
    const nounsIndex = Math.floor(Math.random()*nouns.length);

    return `${adjectives[adjectivesIndex]} ${nouns[nounsIndex]}`;
}

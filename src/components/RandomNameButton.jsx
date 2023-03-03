const adjectives =['lijep', 'zgodan', 'pametan'];
const nouns=['osoba', 'ime', 'nadimak'];

function getRandomName(){
    const adjectivesIndex = Math.floor(Math.random()*adjectives.length);
    const nounsIndex = Math.floor(Math.random()*nouns.length);

    return `${adjectives[adjectivesIndex]} ${nouns[nounsIndex]}`;
}

export function RandomNameButton(props){
    function handleClick() {
        props.onRandomName(getRandomName());
    }
    return (
        <button type="button" onClick={handleClick}> Get random name</button>
    );
}
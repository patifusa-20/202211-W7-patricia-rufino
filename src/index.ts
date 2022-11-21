import { CharacterTypes } from './personaje.js';
import { characters } from './personajes.js';
import { createContent } from './templates.js';

const charactersList: Array<CharacterTypes> = characters();

const renderContent = () => {
    const templates = createContent(charactersList);
    const slots = document.querySelector('slot') as HTMLSlotElement;
    slots.outerHTML = templates;
};

renderContent();

// FUNCIONES BOTONES
const findCharacterSelected = (event: Event) => {
    const characterBtn = event.target as HTMLButtonElement;
    const valueCha = characterBtn.getAttribute('data-character');
    const findCharacter = charactersList.find((item) => item.name === valueCha);
    return findCharacter;
};

// BOTÓN "HABLA"
const renderCommunicationData = (event: Event) => {
    const findCharacter = findCharacterSelected(event);

    const sentenceCha = (findCharacter as CharacterTypes).sentence;
    const blockSentence = document.querySelector(
        '.display-1'
    ) as HTMLDivElement;
    blockSentence.innerHTML = sentenceCha;

    const imageCha = (findCharacter as CharacterTypes).image;
    const blockImage = document.querySelector(
        '.comunications__picture'
    ) as HTMLImageElement;
    const attrBlockImage = blockImage.attributes.getNamedItem('src') as Attr;
    attrBlockImage.value = imageCha;

    function displayComunications() {
        const blockComunications = document.querySelector(
            '.comunications'
        ) as HTMLDivElement;
        blockComunications.classList.toggle('on');
    }
    displayComunications();
    setTimeout(displayComunications, 2000);
};

const communicationButton = document.querySelectorAll('#btn-communication');
communicationButton.forEach((item) => {
    item.addEventListener('click', renderCommunicationData);
});

// BOTÓN "MUERE"

const renderDieData = (event: Event) => {
    const findCharacter = findCharacterSelected(event);

    (findCharacter as CharacterTypes).isAlive = false;

    const characterBlock = document.querySelector(
        `[data-name=${(findCharacter as CharacterTypes).name}]`
    ) as HTMLLIElement;

    const blockIcon = characterBlock.querySelector(
        '.fa-thumbs-up'
    ) as HTMLDivElement;
    blockIcon.classList.replace('fa-thumbs-up', 'fa-thumbs-down');

    const blockImage = characterBlock.querySelector(
        '.character__picture'
    ) as HTMLImageElement;
    blockImage.classList.add('character__picture--rotate');
};

const dieButton = document.querySelectorAll('#btn-die');
dieButton.forEach((item) => {
    item.addEventListener('click', renderDieData);
});

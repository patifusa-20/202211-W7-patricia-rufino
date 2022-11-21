import path from 'path';
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

// BOTÓN "HABLA"

const getDataCharacter = (event: Event) => {
    const characterBtn = event.target as HTMLButtonElement;
    const valueCha = characterBtn.getAttribute('data-character');
    const findCharacter = charactersList.find((item) => item.name === valueCha);
    const sentenceCha = (findCharacter as CharacterTypes).sentence;
    const blockSentence = document.querySelector(
        '.display-1'
    ) as HTMLDivElement;
    blockSentence.innerHTML = sentenceCha;

    const imageCha = (findCharacter as CharacterTypes).image;
    const blockImage = document.querySelector(
        '.comunications__picture'
    ) as HTMLImageElement;
    blockImage.attributes.src.value = imageCha;

    function displayComunications() {
        const blockComunications = document.querySelector(
            '.comunications'
        ) as HTMLDivElement;
        blockComunications.classList.toggle('on');
    }
    displayComunications();
    setTimeout(displayComunications, 2000);

    console.log('he pulsado el botón ' + valueCha + ' ' + sentenceCha);
};

const talkButton = document.querySelectorAll('#btn-talk');
talkButton.forEach((item) => {
    item.addEventListener('click', getDataCharacter);
});

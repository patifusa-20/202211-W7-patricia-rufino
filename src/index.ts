import { CharacterTypes } from './personaje.js';
import { characters } from './personajes.js';
import { createContent } from './templates.js';

const renderContent = () => {
    const charactersList: Array<CharacterTypes> = characters();
    const templates = createContent(charactersList);
    const slots = document.querySelector('slot') as HTMLSlotElement;
    slots.outerHTML = templates;
};

renderContent();

import { CharacterTypes } from './personaje.js';

const loadCharacterTraits = (character: CharacterTypes) => {
    let characterTraits = '';
    if (character.years) {
        characterTraits += `<li>Años de reinado: ${character.years}</li>`;
    }
    if (character.weapon) {
        characterTraits += `<li>Arma: ${character.weapon}</li>`;
    }
    if (character.skill) {
        characterTraits += `<li>Destreza: ${character.skill}</li>`;
    }
    if (character.greasy) {
        characterTraits += `<li>Peloteo: ${character.greasy}</li>`;
    }
    if (character.advisedCharacter && character.family) {
        characterTraits += `<li>Asesora a: ${character.advisedCharacter}</li>`;
    }
    if (character.advisedCharacter && character.greasy) {
        characterTraits += `<li>Sirve a: ${character.advisedCharacter}</li>`;
    }
    return characterTraits;
};
export const createContent = (characters: Array<CharacterTypes>) => {
    let contentTemplate = `<div class="app container"><ul class="characters-list row list-unstyled">`;
    characters.forEach((item) => {
        contentTemplate += `<li class="character col">
                    <div class="card character__card">
                        <img
                            src=${item.image}
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${item.name} ${item.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${item.age} años</li>
                                    <li>
                                        Estado:${
                                            item.isAlive
                                                ? `<i class="fas fa-thumbs-up"></i>`
                                                : `<i class="fas fa-thumbs-down"></i>`
                                        }      
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                ${loadCharacterTraits(
                                    item
                                )}                                  
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn">
                                        habla
                                    </button>
                                    <button class="character__action btn">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji"></i>
                    </div>
                </li>`;
    });
    contentTemplate += `</ul></div><div class="comunications">
            <p class="comunications__text display-1">
                Una frase que dice alguien
            </p>
            <img
                class="comunications__picture"
                src="assets/img/no-one.jpg"
                alt="Nombre y familia del que habla"
            /></div>`;

    return contentTemplate;
};

import { CharacterTypes, King, Fighter, Adviser, Squire } from './personaje.js';

export const characters = () => {
    // Instanciamos todos los personajes.
    const character1: CharacterTypes = new King(
        'Joffrey',
        'Baratheon',
        25,
        'rey',
        'assets/img/joffrey.jpg',
        '&#x1F451;',
        3
    );
    const character2: CharacterTypes = new Fighter(
        'Jaime',
        'Lannister',
        35,
        'luchador',
        'assets/img/jaime.jpg',
        '&#x1F5E1;',
        'espada',
        8
    );
    const character3: CharacterTypes = new Fighter(
        'Daenerys',
        'Targaryen',
        34,
        'luchadora',
        'assets/img/daenerys.jpg',
        '&#x1F5E1;',
        'látigo',
        9
    );
    const character4: CharacterTypes = new Adviser(
        'Tyrion',
        'Lannister',
        49,
        'asesor de Daenerys',
        'assets/img/tyrion.jpg',
        '&#x1F393;',
        character3.name
    );
    const character5: CharacterTypes = new Squire(
        'Bronn',
        '',
        27,
        'escudero de Jaime',
        'assets/img/bronn.jpg',
        '&#x1F6E1;',
        character2.name,
        8
    );

    const charactersList = [character1, character2, character3];
    charactersList.push(character4, character5);

    return charactersList;
};

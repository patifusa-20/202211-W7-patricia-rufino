import { CharacterTypes, King, Fighter, Adviser, Squire } from './personaje.js';

export const characters = () => {
    // Instanciamos todos los personajes.
    const character1: CharacterTypes = new King(
        'Joffrey',
        'Baratheon',
        25,
        'rey',
        'Vais a morir todos',
        true,
        'assets/img/joffrey.jpg',
        3
    );
    const character2: CharacterTypes = new Fighter(
        'Jaime',
        'Lannister',
        35,
        'luchador',
        'Primero pego y luego pregunto',
        true,
        'assets/img/jaime.jpg',
        'espada',
        8
    );
    const character3: CharacterTypes = new Fighter(
        'Daenerys',
        'Targaryen',
        34,
        'luchadora',
        'Primero pego y luego pregunto',
        true,
        'assets/img/daenerys.jpg',
        'látigo',
        9
    );
    const character4: CharacterTypes = new Adviser(
        'Tyrion',
        'Lannister',
        49,
        'asesor de Daenerys',
        'No sé por qué, pero creo que voy a morir pronto',
        true,
        'assets/img/tyrion.jpg',
        character3.name
    );
    const character5: CharacterTypes = new Squire(
        'Bronn',
        '',
        27,
        'escudero de Jaime',
        'Soy un loser',
        true,
        'assets/img/bronn.jpg',
        character2.name,
        8
    );

    const charactersList0 = [character1, character2, character3];
    const charactersList1 = [
        character1,
        character2,
        character3,
        character4,
        character5,
    ];

    console.table(charactersList1);
    return charactersList1;
};

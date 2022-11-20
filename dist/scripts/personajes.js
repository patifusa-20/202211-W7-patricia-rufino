import { Character, King, Fighter, Adviser, } from './personaje.js';
export const characters = () => {
    // Instanciamos todos los personajes.
    const character1 = new King('Joffrey', 'Baratheon', 25, 'rey', 'Vais a morir todos', true, 3);
    const character2 = new Fighter('Jaime', 'Lannister', 35, 'luchador', 'Primero pego y luego pregunto', true, 'espada', 8);
    const character3 = new Fighter('Daenerys', 'Targaryen', 34, 'luchadora', 'Primero pego y luego pregunto', true, 'látigo', 9);
    const character4 = new Adviser('Tyrion', 'Lannister', 49, 'asesor de Daenerys', 'No sé por qué, pero creo que voy a morir pronto', true, character3.name);
    const character5 = new Character('Bronn', '', 27, 'escudero de Jaime', 'Soy un loser');
    const charactersList0 = [character1, character2, character3];
    const charactersList1 = [
        character1,
        character2,
        character3,
        character4,
        character5,
    ];
    console.table(charactersList0);
    console.table(charactersList1);
};

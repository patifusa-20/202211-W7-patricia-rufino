import { Character } from './personaje.js';

export class King extends Character {
    sentence = 'Vais a morir todos'; // revisar en todos
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public icon: string,
        public years: number
    ) {
        super(name, family, age, role, image, icon);
        this.years = years;
    }
    death() {
        super.death();
    }
}

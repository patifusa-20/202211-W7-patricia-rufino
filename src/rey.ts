import { Character } from './personaje.js';

export class King extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public icon: string,
        public years: number
    ) {
        super(name, family, age, role, sentence, isAlive, image, icon);
        this.years = years;
    }
    death() {
        super.death();
    }
}

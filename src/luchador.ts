import { Character } from './personaje.js';

export class Fighter extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public icon: string,
        public weapon: string,
        public skill: number
    ) {
        super(name, family, age, role, sentence, isAlive, image, icon);
        this.weapon = weapon;
        this.skill = skill;
    }
    death() {
        super.death();
    }
}

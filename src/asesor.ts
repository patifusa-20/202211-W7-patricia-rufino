import { Character } from './personaje.js';

export class Adviser extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public icon: string,
        public advisedCharacter: string | undefined
    ) {
        super(name, family, age, role, sentence, isAlive, image, icon);
        this.advisedCharacter = advisedCharacter;
    }
    death() {
        super.death();
    }
}

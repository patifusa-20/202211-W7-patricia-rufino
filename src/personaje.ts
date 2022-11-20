// Montar los datos de cada personaje usando clases

// Definimos los tipos de valores que tendrá el objeto
export interface CharacterTypes {
    name: string;
    family: string;
    age: number;
    role: string;
    sentence: string;
    isAlive: boolean;
    image: string;
    years?: number;
    weapon?: string;
    skill?: number;
    advisedCharacter?: string | undefined;
    greasy?: number;

    death: () => void;
}

// Definimos la clase
export class Character implements CharacterTypes {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string
    ) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.sentence = sentence;
        this.isAlive = isAlive;
        this.image = image;
    }

    death() {
        this.isAlive = false;
        console.log(
            `Yo, ${this.name}, acabo de morir, así que el valor de mi propiedad isAlive es ${this.isAlive}`
        );
    }
}

export class King extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public years: number
    ) {
        super(name, family, age, role, sentence, isAlive, image);
        this.years = years;
    }
    death() {
        super.death();
    }
}

export class Fighter extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public weapon: string,
        public skill: number
    ) {
        super(name, family, age, role, sentence, isAlive, image);
        this.weapon = weapon;
        this.skill = skill;
    }
    death() {
        super.death();
    }
}

export class Adviser extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public advisedCharacter: string | undefined
    ) {
        super(name, family, age, role, sentence, isAlive, image);
        this.advisedCharacter = advisedCharacter;
    }
    death() {
        super.death();
    }
}

export class Squire extends Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public sentence: string,
        public isAlive: boolean = true,
        public image: string,
        public advisedCharacter: string | undefined,
        public greasy: number
    ) {
        super(name, family, age, role, sentence, isAlive, image);
        this.advisedCharacter = advisedCharacter;
        this.greasy = greasy;
    }
    death() {
        super.death();
    }
}

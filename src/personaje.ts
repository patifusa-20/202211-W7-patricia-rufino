// Montar los datos de cada personaje usando clases

// Definimos los tipos de valores que tendrá el objeto
export interface CharacterTypes {
    name: string;
    family: string;
    age: number;
    role: string;
    isAlive: boolean;
    image: string;
    icon: string;
    sentence?: string;
    years?: number;
    weapon?: string;
    skill?: number;
    advisedCharacter?: string;
    greasy?: number;

    death: () => void;
}

// Definimos la clase que tendrán en común todos los personajes
export class Character implements CharacterTypes {
    isAlive = true;
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public icon: string
    ) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.image = image;
    }

    death() {
        this.isAlive = false;
    }
}

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

export class Fighter extends Character {
    sentence = 'Primero pego y luego pregunto';
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public icon: string,
        public weapon: string,
        public skill: number
    ) {
        super(name, family, age, role, image, icon);
        this.weapon = weapon;
        this.skill = skill;
    }
    death() {
        super.death();
    }
}

export class Adviser extends Character {
    sentence = 'No sé por qué, pero creo que voy a morir pronto';
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public icon: string,
        public advisedCharacter: string | undefined
    ) {
        super(name, family, age, role, image, icon);
        this.advisedCharacter = advisedCharacter;
    }
    death() {
        super.death();
    }
}

export class Squire extends Character {
    sentence = 'Soy un loser';
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public icon: string,
        public advisedCharacter: string | undefined,
        public greasy: number
    ) {
        super(name, family, age, role, image, icon);
        this.advisedCharacter = advisedCharacter;
        this.greasy = greasy;
    }
    death() {
        super.death();
    }
}

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
    icon: string;
    years?: number;
    weapon?: string;
    skill?: number;
    advisedCharacter?: string;
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
        public image: string,
        public icon: string
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

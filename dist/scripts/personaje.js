// Montar los datos de cada personaje usando clases
// Definimos la clase
export class Character {
    name;
    family;
    age;
    role;
    sentence;
    isAlive;
    constructor(name, family, age, role, sentence, isAlive = true) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.sentence = sentence;
        this.isAlive = isAlive;
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.sentence = sentence;
        this.isAlive = isAlive;
    }
    death() {
        this.isAlive = false;
        console.log(`Yo, ${this.name}, acabo de morir, así que el valor de mi propiedad isAlive es ${this.isAlive}`);
    }
}
export class King extends Character {
    name;
    family;
    age;
    role;
    sentence;
    isAlive;
    years;
    constructor(name, family, age, role, sentence, isAlive = true, years) {
        super(name, family, age, role, sentence, isAlive);
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.sentence = sentence;
        this.isAlive = isAlive;
        this.years = years;
        this.years = years;
    }
    death() {
        super.death();
    }
}
export class Fighter extends Character {
    name;
    family;
    age;
    role;
    sentence;
    isAlive;
    weapon;
    skill;
    constructor(name, family, age, role, sentence, isAlive = true, weapon, skill) {
        super(name, family, age, role, sentence, isAlive);
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.sentence = sentence;
        this.isAlive = isAlive;
        this.weapon = weapon;
        this.skill = skill;
        this.weapon = weapon;
        this.skill = skill;
    }
    death() {
        super.death();
    }
}
export class Adviser extends Character {
    name;
    family;
    age;
    role;
    sentence;
    isAlive;
    advisedCharacter;
    constructor(name, family, age, role, sentence, isAlive = true, advisedCharacter) {
        super(name, family, age, role, sentence, isAlive);
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.sentence = sentence;
        this.isAlive = isAlive;
        this.advisedCharacter = advisedCharacter;
        this.advisedCharacter = advisedCharacter;
    }
    death() {
        super.death();
    }
}
export class Squire extends Character {
    name;
    family;
    age;
    role;
    sentence;
    isAlive;
    advisedCharacter;
    constructor(name, family, age, role, sentence, isAlive = true, advisedCharacter) {
        super(name, family, age, role, sentence, isAlive);
        this.name = name;
        this.family = family;
        this.age = age;
        this.role = role;
        this.sentence = sentence;
        this.isAlive = isAlive;
        this.advisedCharacter = advisedCharacter;
        this.advisedCharacter = advisedCharacter;
    }
    death() {
        super.death();
    }
}

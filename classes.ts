type SkillType = 'Programming' | 'Design' | 'Marketing' | 'Management';
type Section = 'New York' | 'California' | 'Texas' | 'Florida';
type Company = 'Google' | 'Apple' | 'Microsoft' | 'Amazon';


interface Skill {
    skill: SkillType;
    setSkill(skill: SkillType): void;
}

interface Speed {
    speed: number;
    setSpeed(speed: number): void;
}

abstract class Human implements Skill, Speed {
    public name: string;
    public age: number;
    public state: string;
    public country: string;
    public skill: SkillType;
    public speed: number;

    constructor(name: string, age: number, state?: string, country?: string, skill?: SkillType, speed?: number) {
        this.name = name;
        this.age = age;
        this.state = state || '';
        this.country = country || '';
        this.skill = skill || 'Programming';
        this.speed = speed || 0;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public setState(state: string) {
        this.state = state;
    }

    public setCountry(country: string) {
        this.country = country;
    }

    public getName(): string {
        return this.name;
    }

    public setSkill(skill: SkillType): void {
        this.skill = skill;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }
}


class American extends Human {
    private section: Section;
    private company: Company;

    constructor(section: Section, company: Company) {
        super("American Guy", 30);
        this.section = section;
        this.company = company;
    }

    public getSection(): Section {
        return this.section;
    }

    public setAge(age: number): void {
        this.age = age * 2;
    }

    public getCompany(): Company {
        return this.company;
    }

    public getAge(): number {
        return this.age
    }
}

class Bucket extends Array<string> {
    constructor(...items: string[]) {
        super(...items);
    }

    public push(): number {
        return this.length
    }

    public addItem(item: string): void {
        
    }

    public getItems(): string[] {
        return this;
    }

   
}

// instantiating a classes
// let daniel = new Human("Daniel Emmanuel", 125);
// let oba = new Human("Oba Emmanuel", 25);
let john = new American("New York", "Google");
let myBucket = new Bucket("Item 1");
let len = myBucket.push();

john.setAge(40);
console.log(john.getAge());
// console.log(john.getSection());
// console.log(john.getCompany());

/**
 * Assignment: Create a new class called "Employee" that extends the "Human" class. The "Employee" class should have additional properties for "employeeId" and "department". Implement methods to set and get these properties. Instantiate an object of the "Employee" class and demonstrate the usage of its methods.
 */

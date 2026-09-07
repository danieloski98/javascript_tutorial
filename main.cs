class Human {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setName(name: number) {
        this.name = name.toString();
    }
}

Human daniel = new Human("Daniel Emmanuel");
daniel.setName("Daniel")
daniel.setName(125)

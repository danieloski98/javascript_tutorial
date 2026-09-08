// Scope, Hoisting and closures

// Gloabl and Local scope
let PIE = 3.14; // Global scope

function calculateArea(radius: number): number {
    let area = PIE * radius * radius; // Local scope
    function innerFunction() {
        let area = PIE;
        console.log("Inner function area: ", area);
    }
    innerFunction();
    return area;
}

let raidus = 5;

console.log("Area of circle: ", calculateArea(raidus));

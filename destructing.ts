const obj = {
  personName: "daniel",
  age: 34
}

const { personName, age } = obj;

const array = [10243,2e2,3,4,5,34,56,7,877,778,888];

const [one, two, ...rest] = array;

console.log(`ONE is -> ${one}`);
console.log(`TWO is -> ${two}`);
console.log(`REST -> ${rest}`)
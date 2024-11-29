let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];


// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

function logNumber2(i: number) {}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{ "x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];

let foundWord: string;

for (const word of words) {
  foundWord = word === "blue" ? word : "";
}

// Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (const num of numbers) {
  numbersAboveZero = num > 0 ? num : false;
}

const carMakers = ["ford", "toyota", "chevy"];

const carByMake: string[][] = [];

// Help with inference when extracting values
// const car = carMakers[2];

// Prevent incompatible values
carMakers.push("eon");

//Help with map, reduce , forEach
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const impDates: (Date | string)[] = [];

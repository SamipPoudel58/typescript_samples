const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//method 1
const pepsi: [string, boolean, number] = ["brown", true, 40];

//method 2
type Drink = [string, boolean, number];
const pepsi2: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 50];

// DRAWBACK OF TUPLE
// 👎👎
const carSpecs: [number, number] = [400, 3354];

// 👍👍
const carStats = {
  horsepower: 400,
  weight: 3354,
};

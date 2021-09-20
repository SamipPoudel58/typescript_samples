const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//method 1
const pepsi: [string, boolean, number] = ["brown", true, 40];

//method 2 Using tuple
type Drink = [string, boolean, number];
const pepsi2: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 50];

// FYI: you can also make the items optional by using "?"
type DrinkOptional = [string?, boolean?, number?];

// DRAWBACK OF TUPLE
// 👎👎 not very specific and readable
const carSpecs: [number, number] = [400, 3354];

// 👍👍
const carStats = {
  horsepower: 400,
  weight: 3354,
};

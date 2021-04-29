interface Reportable {
  summary(): string;
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} gm of sugar`;
  },
};

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

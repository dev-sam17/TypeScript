interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2008,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);

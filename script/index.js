const heroes = [
  { name: "Spider-Man", power: 85, universe: "Marvel", isActive: true, isAlien: false },
  { name: "Batman", power: 80, universe: "DC", isActive: false, isAlien: false },
  { name: "Wonder Woman", power: 90, universe: "DC", isActive: true, isAlien: true },
  { name: "Iron Man", power: 88, universe: "Marvel", isActive: true, isAlien: false },
  { name: "Captain Marvel", power: 95, universe: "Marvel", isActive: false, isAlien: true },
  { name: "Flash", power: 78, universe: "DC", isActive: true, isAlien: false },
  { name: "Thor", power: 92, universe: "Marvel", isActive: true, isAlien: true },
  { name: "Green Lantern", power: 83, universe: "DC", isActive: true, isAlien: true },
  { name: "Black Panther", power: 87, universe: "Marvel", isActive: false, isAlien: false },
  { name: "Martian Manhunter", power: 91, universe: "DC", isActive: true, isAlien: true },
];

const heroesActive = heroes.filter((element) => element.isActive === true);

const heroesMarvel = heroes.filter((element) => element.universe === "Marvel");

const heroesAlien = heroes.filter((element) => element.isAlien);

const heroesPower90OrMore = heroes.filter((element) => element.power >= 90);

const heroesActiveHuman = heroes.filter((element) => !element.isAlien && element.isActive);

const heroesDCPower85OrMore = heroes.filter(
  (element) => element.universe === "DC" && element.power >= 85
);

const heroesInactiveHuman = heroes.filter((element) => !element.isActive && !element.isAlien);

const heroesMan = heroes.filter((element) => element.name.toLowerCase().includes("man"));

const heroesUnpairPower = heroes.filter((element) => element.power % 2 == 1);

const heroes10CaractereName = heroes.filter((element) => element.name.length >= 10);

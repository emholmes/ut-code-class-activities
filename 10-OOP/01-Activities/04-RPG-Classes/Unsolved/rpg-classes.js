// Paste your code from the previous activity `03-RPG-Prototypes`
// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
// YOUR CODE HERE
//
class Character {
  constructor(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }

  printStats() {
    console.log(`
      Name: ${this.name}
      Strength: ${this.strength} 
      Hitpoints: ${this.hitpoints}
    `);
  }

  isAlive() {
    if (this.hitpoints < 0) {
      console.log(`${this.name} has died.`);
      return false;
    }
    console.log(`${this.name} is alive!`);
    return true;
  }

  attack = function(opponent) {
    opponent.hitpoints -= this.strength; 
    console.log(`${this.name} has attacked ${opponent.name}`);
  }
// =============================================================
}

let warrior = new Character('Crusher', 10, 75);
let rogue = new Character('Dodger', 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();


// Convert the constructor function, including the prototype methods, to ES6 Classes.

// =============================================================

// Create two new instances of a `Character`, giving them different names, strength, and hitPoints.
let bard = new Character("Silvie", 15, 65);
let orc = new Character("Smalls", 20, 80);

// Call a combination of `printStats()`, `attack()`, and `isAlive()` methods to have the two characters "fight" in your console.

bard.printStats();
orc.printStats();

bard.attack(orc);
orc.printStats();
orc.isAlive();
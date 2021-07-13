const Character = require('../rpg-tdd');

test('creates a character object', () => {
  // Create a new character with a `name`, `strength`, and `hitpoints` values
  // YOUR CODE HERE
  //
  const character = new Character("Steve", 10, 50);
  // Create a test that checks if the `name` is a `string`
  // YOUR CODE HERE
  //
  expect(character.name).toEqual(expect.any(String));
  // Create a test that checks if the `strength` and `hitpoints` are `numbers`
  // YOUR CODE HERE
  //
  expect(character.strength).toEqual(expect.any(Number));
  expect(character.hitpoints).toEqual(expect.any(Number));

  // Create a test that checks if the `hitpoints` is greater than the `strength`
  // YOUR CODE HERE
  //
  expect(character.hitpoints).toBeGreaterThan(character.strength);
});

// Bonus: write a test that will check if the character is alive or not
test("check whether character is alive or not", () => {
  const character = new Character("Steve", 10, 50);

  expect(character.isAlive()).toBeTruthy();

  character.hitpoints = 0;

  expect(character.isAlive()).toBeFalsy();
});
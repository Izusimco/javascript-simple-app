let pokemonList = [
    {
        name: 'Chameleon (height: 7)',
        type: 'grass'
    }
]

// loop throught the pokemonList array
for (let i = 0; i < pokemonList.length; i++) {
    // created a 'let pokemon' to reference the current object in the loop.
    let pokemon = pokemonList[i];
    document.write(`name: ${pokemon.name}, type: ${pokemon.type}`);
}

let game = [
    {
        name: 'Chameleon',
        height: 0.7,
        type: [' grass', 'poison']
    },
    {
        name: 'Charizard',
        height: 1.7,
        type: ['fire', 'flying']
    },
    {
        name: 'Squitie',
        height: 1,
        type: ['water']
    }
]

  // loop through the game arrays
for (let i = 0; i < game.length; i++) {
    // initializes an empty string variable
    let note = '';
    // checks if the height property is above 1.0
    if (game[i].height > 1.0) {
    // If the height is above 1.0, the note variable is set to ' - wow, this is huge'.   
      note = ' - wow, this is huge';
    }
    // to output a string for each object in the array
   document.write(`${game[i].name}(height:${game[i].height})${note}`);
  }

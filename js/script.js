
let pokemonList = [
    {
        name: 'Chameleon (height: 7)',
        type: 'grass'
    }
]
// loop throught the pokemonList array
pokemonList.forEach(function(pklist){
  document.write('name: ' + pklist.name + ' type:' + pklist.type)
})


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

    game.forEach((gameList) =>{
      
 // initializes an empty string variable
    let note = ''; 
// If the height is above 1.0, the note variable is set to ' - wow, this is huge 
      
    if (gameList.height > 1.0){

       note = ' - wow, this is huge';
    }
        // to output a string for each object in the array
 document.write(`${gameList.name}(height:${gameList.height})${note}`);
    })

  

// The ' pokemonRepository' created and assigns to it the result of an immediately invoked function expression (IIFE)
let pokemonRepository = (function(){
    //  Initializes an array called pokemonList with one object that represents a Pokémon.
      let pokemonList = [
        {
            name: 'Chameleon (height: 7)',
            type: 'grass'
        }
    ];
      // Defines a function called getAll that returns the pokemonList array.
      function getAll(){
      return pokemonList;
           }
      // Defines a function called add that takes a Pokémon object as an argument and adds it to the end of the pokemonList array using the push method.
      function add(pokemon){
      pokemonList.push(pokemon);   
          } 
      // This line returns an object with two keys (getAll and add) that are assigned the getAll and add functions as values.
       return{
       getAll: getAll,
       add: add
       }
      })();
    // This line uses the getAll function of the pokemonRepository object to get the pokemonList array, and then loops through it.
    pokemonRepository.getAll().forEach(function(pokemon) {
     document.write('name: ' + pokemon.name + ' type:' + pokemon.type);
    });
     
    // This line initializes an array called game with three objects that represent different Pokémon.
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
    
      
    
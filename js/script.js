let pokemonRepository = (function() {
    let pokemonList = [
      {
        name: 'Chameleon',
        height: 0.7,
        type: ['grass', 'poison']
      },
      {
        name: 'Charizard',
        height: 1.7,
        type: ['fire', 'flying']
      },
      {
        name: 'Squirtle',
        height: 0.5,
        type: ['water']
      }
    ];
    // defines a function called getAll that simply returns the pokemonList array.
    function getAll() {
      return pokemonList;
    }
    // Defines a function called add that takes a single argument (item) and pushes 
    // it onto the end of the pokemonList array
    function add(item) {
      pokemonList.push(item);
    }
//   This line returns an object with two keys (getAll and add) that are assigned 
//   the getAll and add functions as values. The entire IIFE is executed immediately.
    return {
      getAll: getAll,
      add: add
    };
  })();
  
  pokemonRepository.getAll().forEach(function(repoList) {
    let note = '';
    if (repoList.height > 1.0) {
      note = ' - wow, this is huge';
    }
    document.write(repoList.name + ' (height: ' + repoList.height + ')' + note);
  });
  
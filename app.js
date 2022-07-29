const pokemon_types_url = "https://pokeapi.co/api/v2/type?limit=1155&offset=0";
const pokemons_url = "https://pokeapi.co/api/v2/pokemon?limit=1155&offset=0"

var pokemonTypes;
var pokemons;

const getTypes = (url) => fetch(url).then((res) => res.json()).then((resp)=> {
        pokemonTypes = resp.results
        pokemonTypes.forEach((type) => {
                fetch(type.url).then((res) => res.json()).then((resp) => {
                    type.damage_relations = resp.damage_relations
                    // type.pokemons = resp.pokemon
                    // type.data = resp
                })
            }
        )
    }
)

const getPokemons = (url) => fetch(url).then((res) =>res.json()).then((res)=> pokemons = res.results)

getTypes(pokemon_types_url)
getPokemons(pokemons_url)

setTimeout(() => console.log(pokemonTypes), 500)
setTimeout(() => console.log(pokemons), 1000)





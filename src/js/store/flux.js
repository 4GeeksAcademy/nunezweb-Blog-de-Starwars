import CharacterCards from "../views/CharactersCards";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      detailedCharacters: {},
      detailedStarships: {},
      characterscards: [],
      starshipscards: [],
      favoriteStore: [],
      people: [],
      apiUrl: "https://swapi.tech/api",
    },
    actions: {
      getCharactersCards: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrl}/people/?page=1&limit=10`
          );
          const data = await response.json();
          if (response.ok) {
            // Traer detalles de cada personaje
            const detailedCharacters = {};
            for (let character of data.results) {
              const charResponse = await fetch(character.url);
              const charData = await charResponse.json();
              if (charResponse.ok) {
                detailedCharacters[character.uid] = charData.result.properties;
              }
            }
            setStore({ characterscards: data.results, detailedCharacters });
            console.log("Contenido completo del store1:", getStore());
            return true;
          }
          setStore({ characterscards: [], detailedCharacters: {} });
          return false;
        } catch (error) {
          console.error("Error fetching characters:", error);
          setStore({ characterscards: [], detailedCharacters: {} });
          return false;
        }
      },
      getStarshipsCards: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrl}/starships/?page=2&limit=10`
          );
          const data = await response.json();
          if (response.ok) {
            // Traer detalles de cada personaje
            const detailedStarships = {};
            for (let character of data.results) {
              const shipResponse = await fetch(character.url);
              const shipData = await shipResponse.json();
              if (shipResponse.ok) {
                detailedStarships[character.uid] = shipData.result.properties;
              }
            }
            setStore({ starshipscards: data.results, detailedStarships });
            return true;
          }
          setStore({ starshipscards: [], detailedStarships: {} });
          return false;
        } catch (error) {
          console.error("Error fetching characters:", error);
          setStore({ starshipscards: [], detailedStarships: {} });
          return false;
        }
      },
      favorite: (favoriteName) => {
        const store = getStore();

        if (store.favoriteStore.includes(favoriteName)) {
          setStore({
            favoriteStore: store.favoriteStore.filter(
              (nameCharacter) => nameCharacter !== favoriteName
            ),
          });
        } else {
          setStore({ favoriteStore: [...store.favoriteStore, favoriteName] });
        }
      },
    },
  };
};

export default getState;

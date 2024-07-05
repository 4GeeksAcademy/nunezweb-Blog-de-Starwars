import CharacterCards from "../views/CharactersCards";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      detailedCharacters: {},
      descriptionCharacters: {},
      detailedStarships: {},
      characterscards: [],
      starshipscards: [],
      favoriteStore: [],
      storeClicUid: null,
      // people: [],
      apiUrl: "https://swapi.tech/api",
    },
    actions: {
      getStoreClicUid: (uid) => {
        setStore({ storeClicUid: uid});
      },
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
            const descriptionCharacters = {}; // prueba modificacione descriptionCharacters
            for (let character of data.results) {
              const charResponse = await fetch(character.url);
              const charData = await charResponse.json();
              if (charResponse.ok) {
                detailedCharacters[character.uid] = charData.result.properties;
                descriptionCharacters[character.uid] = charData.result.description; // prueba modificacione descriptionCharacters
              }
            }
            setStore({ characterscards: data.results, detailedCharacters, descriptionCharacters }); // prueba modificacione descriptionCharacters
            console.log("Contenido completo del store1:", getStore());
            return true;
          }
          setStore({ characterscards: [], detailedCharacters: {}, descriptionCharacters: {} }); // prueba modificacione descriptionCharacters
          return false;
        } catch (error) {
          console.error("Error fetching characters:", error);
          setStore({ characterscards: [], detailedCharacters: {}, descriptionCharacters: {} });  // prueba modificacione descriptionCharacters
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

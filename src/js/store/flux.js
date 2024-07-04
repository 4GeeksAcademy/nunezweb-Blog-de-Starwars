import CharacterCards from "../views/CharactersCards";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characterscards: [],
      starshipscards: [],
      characterscardsitems: [],
      favoriteStore: [],
      elementType: [],
      people: [],
      starships: [],
      id: [],
      apiUrl: "https://swapi.tech/api",
      apiUrlC: "https://swapi.dev/api",
    },
    actions: {
      swapiFetch: async (elementType, id) => {
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}/${id}`);
          if (!resp.ok) {
            throw new Error("Network response was not ok");
          }
          let data = await resp.json();
          let obj = {};
          obj[elementType] = data.result;
          setStore({ ...obj });
          console.log("Datos almacenados en el store:", obj); // Línea añadida para verificar los datos
        } catch (error) {
          console.error(`Error en la promesa: ${error}`);
          console.log("Contenido actual del store:", getStore()); // Línea añadida para ver el contenido completo del store
          return;
        }
      },      
      getCharactersCards: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrlC}/people/?page=1&limit=10`
          );
          const data = await response.json();
          console.log("Response Data:", data.results);
          if (response.ok) {
            setStore({ characterscards: data.results });
            return true;
          }
          setStore({ characterscards: [] });
          return false;
        } catch (error) {
          console.error("Error fetching characters:", error);
          setStore({ characterscards: [] });
          return false;
        }
      },
      getStarshipsCards: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/starships/`);
          const data = await response.json();
          console.log("Response Data:", data.results);
          if (response.ok) {
            setStore({ starshipscards: data.results });
            return true;
          }
          setStore({ starshipscards: [] });
          return false;
        } catch (error) {
          console.error("Error fetching characters:", error);
          setStore({ starshipscards: [] });
          return false;
        }
      },
      getCharactersCardsItems: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/people/1`);
          const data = await response.json();
          console.log("Response Item:", data.results);
          if (response.ok) {
            setStore({ characterscardsitems: data.results });
            console.log("Updated Store:", getStore());
            return true;
          }
          setStore({ characterscardsitems: [] });
          return false;
        } catch (error) {
          console.error("Error fetching characters:", error);
          setStore({ characterscardsitems: [] });
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

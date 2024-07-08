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
      apiUrl: "https://swapi.tech/api",
    },
    actions: {
      getStoreClicUid: (uid) => {
        setStore({ storeClicUid: uid });
      },
   

    },
  };
};

export default getState;

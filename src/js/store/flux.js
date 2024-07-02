import CharacterCards from "../views/CharactersCards";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characterscards: [],
			starshipscards: [],
			characterscardsitems: [],
            favoriteStore: [],
            apiUrl: "https://www.swapi.tech/api"
        },
        actions: {
            getCharactersCards: async () => {
                const store = getStore();
                try {
                    const response = await fetch(
                        `${store.apiUrl}/people?page=1&limit=10`
                    );
                    const data = await response.json();
                    console.log('Response Data:', data.results);
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
            getCharactersCardsItems: async () => {
                const store = getStore();
                try {
                    const response = await fetch(
                        `${store.apiUrl}/people/1`
                    );
                    const data = await response.json();
                    console.log('Response Item:', data.results);
                    if (response.ok) {
                        setStore({ characterscardsitems: data.results });
						console.log('Updated Store:', getStore());
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

                if (store.favoriteStore.includes(favoriteName)){
                    setStore({favoriteStore: store.favoriteStore.filter((nameCharacter) => nameCharacter !== favoriteName)});
                } else {
                    setStore({favoriteStore: [...store.favoriteStore, favoriteName]});
                }
            }
        }
    };
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterscards: [],
      		apiUrl: "https://www.swapi.tech/api",
			favoriteStore: []
		},
		actions: {
			getCharactersCards: async () => {
				const store = getStore();
				try {
				  const response = await fetch(
					`${store.apiUrl}/people?page=1&limit=10`
				  );
				  const data = await response.json();
				  console.log('Response Data:', data);
				  if (response.ok) {
					setStore({ characterscards: data.characterscards });
					return true;
				  }
				  setStore({ characterscards: false });
				  return false;
				} catch (error) {
					console.error("Error fetching characters:", error);
				  setStore({ characterscards: false });
				  return false;
				}
			  },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			favorite: (favoriteName) => {
				const store = getStore();

				if (store.favoriteStore.includes(favoriteName)){
					setStore({favoriteStore:store.favoriteStore.filter((nameCharacter) => nameCharacter != favoriteName)});
				} else {
					setStore({favoriteStore:[...store.favoriteStore,favoriteName]});
				}

			},

		}
	};
};

export default getState;

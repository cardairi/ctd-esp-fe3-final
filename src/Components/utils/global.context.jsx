import { createContext, useReducer, useEffect } from "react";

export const initialState = {
  theme: {
    light: {
      backgroundHome: "#F5F5F4",
      backgroundNavbar: "#818CF8",
      backgroundFooter: "#818CF8",
      backgroundCard: " #818CF8",
      color: "#000000",
    },
    dark: {
      backgroundHome: "#E2E8F0",
      backgroundNavbar: "#020617",
      backgroundFooter: "#020617",
      backgroundCard: "#020617",
      color: "#ffffff",
    },
  },
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};
export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme =
        state.theme === initialState.theme.light
          ? initialState.theme.dark
          : initialState.theme.light;
      return {
        ...state,
        theme: newTheme,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_FAV":
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    theme: initialState.theme.dark,
  });

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  console.log(state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ContextGlobal.Provider value={{ toggleTheme, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
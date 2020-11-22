import { createContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";

let initialState = {
  urlPage: 1,
  base_url: `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1`,
  posts: [],
  filteredPosts: [],
  hasError: false,
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };

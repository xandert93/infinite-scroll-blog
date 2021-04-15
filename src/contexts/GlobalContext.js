import { createContext, useReducer } from 'react';
import { appReducer } from '../reducer/appReducer';

import {
  GET_POSTS,
  SET_ERR_MSG,
  SET_IS_LOADING,
  UPDATE_URL,
} from '../reducer/actions';
import axios from 'axios';

let initialState = {
  urlPage: 1,
  baseUrl: 'https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1',
  isLoading: false,
  fetchedPosts: [],
  filteredPosts: [],
  errMsg: null,
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { baseUrl, fetchedPosts } = state;

  const setIsLoading = () => dispatch({ type: SET_IS_LOADING });

  const fetchPosts = async () => {
    try {
      const res = await axios.get(baseUrl);
      setTimeout(
        () => dispatch({ type: GET_POSTS, payload: res.data }),
        fetchedPosts.length === 0 ? 2000 : 1000
      );
    } catch (err) {
      dispatch({
        type: SET_ERR_MSG,
        payload: `There was an error: ${err.message}.`,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{ ...state, setIsLoading, fetchPosts, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };

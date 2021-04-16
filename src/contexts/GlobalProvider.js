import { globalContext, initialState } from './globalContext';
import { useCallback, useReducer } from 'react';
import { appReducer } from '../reducer/appReducer';
import axios from 'axios';

import {
  GET_POSTS,
  SET_ERR_MSG,
  FILTER_POSTS,
  SET_LOADING,
} from '../reducer/actions';

let pageNumber = 1;
let baseUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=';

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { fetchedPosts } = state;

  const fetchPosts = useCallback(async () => {
    try {
      const res = await axios.get(baseUrl + pageNumber);

      setTimeout(
        () => {
          dispatch({ type: GET_POSTS, payload: res.data });
          pageNumber++;
        },
        fetchedPosts.length === 0 ? 3000 : 2000
      );
    } catch (err) {
      dispatch({
        type: SET_ERR_MSG,
        payload: `There was an error: ${err.message}.`,
      });
    }
  }, []);

  const setLoading = useCallback(() => dispatch({ type: SET_LOADING }), []);

  const filterPosts = useCallback(
    (userInput) =>
      dispatch({
        type: FILTER_POSTS,
        payload: userInput.toLowerCase(),
      }),
    []
  );

  return (
    <globalContext.Provider
      value={{ ...state, fetchPosts, setLoading, filterPosts }}
    >
      {children}
    </globalContext.Provider>
  );
};

export { GlobalProvider };

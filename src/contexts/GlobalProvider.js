import { globalContext, initialState } from './globalContext';
import { useReducer } from 'react';
import { appReducer } from '../reducer/appReducer';
import axios from 'axios';

import {
  GET_POSTS,
  SET_ERR_MSG,
  FILTER_POSTS,
  SET_LOADING,
} from '../reducer/actions';

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { baseUrl, fetchedPosts } = state;

  const fetchPosts = async () => {
    try {
      const res = await axios.get(baseUrl);
      setTimeout(
        () => dispatch({ type: GET_POSTS, payload: res.data }),
        fetchedPosts.length === 0 ? 3000 : 2000
      );
    } catch (err) {
      dispatch({
        type: SET_ERR_MSG,
        payload: `There was an error: ${err.message}.`,
      });
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const filterPosts = (userInput) =>
    dispatch({
      type: FILTER_POSTS,
      payload: userInput.toLowerCase(),
    });

  return (
    <globalContext.Provider
      value={{ ...state, fetchPosts, setLoading, filterPosts }}
    >
      {children}
    </globalContext.Provider>
  );
};

export { GlobalProvider };

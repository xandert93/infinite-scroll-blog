import { createContext } from 'react';

export const initialState = {
  isLoading: true, //start true so to prevent extra re-render of Provider
  fetchedPosts: [],
  filteredPosts: [],
  errMsg: null,
};

export const globalContext = createContext();

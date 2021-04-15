import { createContext } from 'react';

export const initialState = {
  urlPage: 1,
  baseUrl: 'https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1',
  isLoading: true, //start true so to prevent extra re-render of Provider
  fetchedPosts: [],
  filteredPosts: [],
  errMsg: null,
};

export const globalContext = createContext();

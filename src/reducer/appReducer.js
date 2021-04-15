import {
  SET_IS_LOADING,
  GET_POSTS,
  SEARCH_CHANGE,
  SET_ERR_MSG,
} from './actions';

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        isLoading: false,
        fetchedPosts: [...state.fetchedPosts, ...action.payload],
        filteredPosts: [...state.fetchedPosts, ...action.payload],
        urlPage: state.urlPage + 1,
        baseUrl: `https://jsonplaceholder.typicode.com/posts?_limit=4&_page=${
          state.urlPage + 1
        }`,
      };
    case SEARCH_CHANGE:
      return {
        ...state,
        filteredPosts: state.fetchedPosts.filter(({ title, body }) => {
          return (
            title.includes(action.payload) || body.includes(action.payload)
          );
        }),
      };
    case SET_ERR_MSG:
      return {
        ...state,
        isLoading: false,
        fetchedPosts: [],
        errMsg: action.payload,
      };
    default:
      return state;
  }
};

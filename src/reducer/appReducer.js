import { SET_LOADING, GET_POSTS, FILTER_POSTS, SET_ERR_MSG } from './actions';

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
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
      };
    case FILTER_POSTS:
      return {
        ...state,
        filteredPosts: state.fetchedPosts.filter(
          ({ title, body }) =>
            title.includes(action.payload) || body.includes(action.payload)
        ),
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

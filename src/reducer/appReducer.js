import { ACTIONS } from "./actions";

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        filteredPosts: [...state.posts, ...action.payload],
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        posts: [],
        hasError: action.payload,
      };
    case ACTIONS.SEARCH_CHANGE:
      return {
        ...state,
        searchField: action.payload,
        filteredPosts: state.posts.filter(({ title, body }) => {
          return (
            title.includes(action.payload) || body.includes(action.payload)
          );
        }),
      };
    case ACTIONS.GET_MORE_POSTS:
      return {
        ...state,
        urlPage: state.urlPage + 1,
        base_url: `https://jsonplaceholder.typicode.com/posts?_limit=4&_page=${
          state.urlPage + 1
        }`,
      };
    default:
      return state;
  }
};

export { appReducer };

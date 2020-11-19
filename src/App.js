import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SearchInputContainer from "./components/SearchInputContainer";
import { useReducer, useEffect } from "react";
import { appReducer } from "./reducer/appReducer";
import { get } from "axios";
import PostContainers from "./components/PostContainers";

let initialState = {
  searchField: "",
  urlPage: 1,
  base_url: `https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1`,
  posts: [],
  filteredPosts: [],
  hasError: false,
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  let { searchField, base_url, filteredPosts, hasError } = state;

  useEffect(
    () =>
      setTimeout(() => {
        get(base_url)
          .then((response) => {
            dispatch({ type: "GET_POSTS", payload: response.data });
          })
          .catch((err) =>
            dispatch({ type: "ERROR", payload: "There was an error." })
          );
      }, 500),
    [base_url]
  );

  return (
    <div className="app">
      <Header />
      <SearchInputContainer searchField={searchField} dispatch={dispatch} />
      {filteredPosts.length === 0 ? (
        <h3>LOADING...</h3>
      ) : hasError ? (
        <h3>Please try refreshing</h3>
      ) : (
        <PostContainers filteredPosts={filteredPosts} />
      )}
      <Loader dispatch={dispatch} />
      <Footer />
    </div>
  );
};

export default App;

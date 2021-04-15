import './App.css';
import Posts from './components/Posts';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Loader from './components/layout/Loader';
import SearchBar from './components/SearchBar';

import { useContext, useEffect, useRef, useState } from 'react';
import { globalContext } from './contexts/globalContext';

const App = () => {
  const { isLoading, filteredPosts, fetchPosts } = useContext(globalContext);
  const inputRef = useRef();
  const postRef = useRef();

  useEffect(fetchPosts, []);

  return (
    <>
      <Header />
      <SearchBar inputRef={inputRef} />
      {/* {isLoading && <Loader />} */}
      {filteredPosts.length > 0 && <Posts postRef={postRef} />}
      {filteredPosts.length > 0 && (
        <Loader inputNode={inputRef.current} postNode={postRef.current} />
      )}
      <Footer />
    </>
  );
};

export default App;

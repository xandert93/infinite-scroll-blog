import './App.scss';
import Posts from './components/Posts';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Loader from './components/layout/Loader';
import SearchBar from './components/SearchBar';

import { useContext, useEffect, useRef } from 'react';
import { globalContext } from './contexts/globalContext';

const App = () => {
  const { isLoading, filteredPosts, fetchPosts } = useContext(globalContext);
  const inputRef = useRef();

  useEffect(fetchPosts, []);

  return (
    <>
      <Header />
      <SearchBar inputRef={inputRef} />
      {filteredPosts.length === 0 && isLoading && <Loader />}
      {filteredPosts.length > 0 && (
        <>
          <Posts inputRef={inputRef} />
          {isLoading && <Loader />}
        </>
      )}
      <Footer />
    </>
  );
};

export default App;

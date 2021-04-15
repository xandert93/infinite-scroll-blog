import './App.css';
import Posts from './components/Posts';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Loader from './components/layout/Loader';
import SearchBar from './components/SearchBar';

import { useRef } from 'react';

const App = () => {
  const inputRef = useRef(null);
  const postRef = useRef(null);
  return (
    <>
      <Header />
      <SearchBar inputRef={inputRef} />
      <Posts postRef={postRef} />
      <Loader inputRef={inputRef} postRef={postRef} />
      <Footer />
    </>
  );
};

export default App;

import './App.css';
import Posts from './components/Posts';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Loader from './components/layout/Loader';
import SearchBar from './components/SearchBar';

import { GlobalProvider } from './contexts/GlobalContext';

const App = () => (
  <GlobalProvider>
    <Header />
    <SearchBar />
    <Posts />
    <Loader />
    <Footer />
  </GlobalProvider>
);

export default App;

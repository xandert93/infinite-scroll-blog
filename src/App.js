import "./App.css";
import PostsContainer from "./components/PostsContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SearchInputContainer from "./components/SearchInputContainer";

import { GlobalProvider } from "./contexts/GlobalContext";

const App = () => (
  <GlobalProvider>
    <Header />
    <SearchInputContainer />
    <PostsContainer />
    <Loader />
    <Footer />
  </GlobalProvider>
);

export default App;

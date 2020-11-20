import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SearchInputContainer from "./components/SearchInputContainer";

import { GlobalProvider } from "./contexts/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <SearchInputContainer />
      <Body />
      <Loader />
      <Footer />
    </GlobalProvider>
  );
};

export default App;

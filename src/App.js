
import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://portfolio-sarah.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
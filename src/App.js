import "./App.css";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import { Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" component={Header} />

        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </header>
    </div>
  );
}

export default App;

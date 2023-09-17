import Header from "./components/home/header/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pageContent/HomePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

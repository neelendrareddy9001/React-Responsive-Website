import Header from "./components/home/header/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./components/pageContent/Pages";
import HomePages from "./components/pages/HomePages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/pages" exact component={Pages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

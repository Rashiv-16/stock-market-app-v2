import { Route, Switch } from "react-router";

//global css
import "./app.css";

//components
import Header from "./components/Header";

//pages
import HomePage from "./pages/HomePage";
import ViewPage from "./pages/ViewPage";

const App = () => {
  // const searchHandler = (data) => {};

  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/view">
          <ViewPage />
        </Route>
      </Switch>
    </main>
  );
};

export default App;

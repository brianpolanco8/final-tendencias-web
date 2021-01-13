import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, SignUp } from "pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" render={(props) => <SignUp {...props} />} />
          <Route path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

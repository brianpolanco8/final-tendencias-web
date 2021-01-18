import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Articles, Cart, Home, SignIn, SignUp } from "pages";
import { Header, Footer } from "components";
import { Container } from "@material-ui/core";

const App = () => {
  const sections = [
    { title: "Ver articulos", url: "/articles" },
    // { title: "Comprar", url: "#" },
  ];
  console.log("yey");
  return (
    <div className="App">
      <Router>
        {/* HEADER */}
        <Container maxWidth="lg">
          <Header title="MediMarket" sections={sections} />
          <Switch>
            <Route path="/signup" render={(props) => <SignUp {...props} />} />
            <Route path="/signin" render={(props) => <SignIn {...props} />} />
            <Route
              path="/articles"
              render={(props) => <Articles {...props} />}
            />
            <Route path="/cart" render={(props) => <Cart {...props} />} />
            <Route path="/" render={(props) => <Home {...props} />} />
          </Switch>
          <Footer
            title="MediMarket"
            description="Todos los derechos reservados!"
          />
        </Container>
      </Router>
    </div>
  );
};

export default App;

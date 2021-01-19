import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddArticle, Articles, Cart, Home, SignIn, SignUp } from "pages";
import { Header, Footer } from "components";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getAuthState } from "store/slices/app";

const App = () => {
  const sections = [
    { title: "Ver articulos", url: "/articles" },
    // { title: "Comprar", url: "#" },
  ];
  const isAuth = useSelector(getAuthState);
  return (
    <div className="App">
      <Router>
        {/* HEADER */}
        <Container maxWidth="lg">
          <Header
            className="title"
            title="Tendencias"
            sections={sections}
            pathname={"/"}
          />
          <Switch>
            <Route path="/signup" render={(props) => <SignUp {...props} />} />
            <Route path="/signin" render={(props) => <SignIn {...props} />} />
            <Route
              path="/articles"
              render={(props) => <Articles {...props} />}
            />
            <Route
              path="/cart"
              render={(props) =>
                isAuth ? <Cart {...props} /> : <SignIn {...props} />
              }
            />
            <Route
              path="/addArticle"
              render={(props) =>
                isAuth ? <AddArticle {...props} /> : <SignIn {...props} />
              }
            />
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

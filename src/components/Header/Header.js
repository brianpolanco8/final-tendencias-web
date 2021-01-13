import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MediMarket
          </Typography>
          <Link to="/signin" style={{ color: "white" }}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/signup" style={{ color: "white" }}>
            <Button color="inherit">SignUp</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

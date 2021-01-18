import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { Badge, withStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartCount,
  getAuthState,
  getUserData,
  clear,
} from "store/slices/app";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const cartItemsCount = useSelector(getCartCount);
  const isAuth = useSelector(getAuthState);
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" onClick={() => history.push("/")}>
          Go Home
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {!isAuth ? (
          <>
            <Link to="/signin">
              <Button variant="outlined" size="small">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outlined" size="small">
                Sign Up
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Typography
              component="h4"
              variant="h6"
              style={{ marginRight: "3px" }}
            >
              {userData.nombre}
            </Typography>
            <Typography component="h4" variant="h6">
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  dispatch(clear());
                  window.location.reload();
                }}
              >
                Cerrar Sesión
              </Button>
            </Typography>
          </>
        )}
        <IconButton aria-label="cart" onClick={() => history.push("/cart")}>
          <StyledBadge badgeContent={cartItemsCount} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            // variant="body2"
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { FeaturedStore } from "components";
import { useSelector } from "react-redux";
import { getCartState } from "store/slices/app";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { useHistory, useLocation } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(getCartState);
  const history = useHistory();
  let { pathname } = useLocation();

  const getCartTotal = () => {
    let total = 0;

    cart?.items?.forEach((item) => {
      total = total + item.price;
    });

    return total;
  };

  return (
    <Grid container>
      <Typography variant="h4" gutterBottom>
        Mi carrito
      </Typography>

      <Grid container spacing={4}>
        {cart?.items.length > 0 ? (
          cart.items.map((item) => (
            <FeaturedStore key={item.title} item={item} pathname={pathname} />
          ))
        ) : (
          <div
            style={{
              margin: "0 auto",
            }}
          >
            <IconButton onClick={() => history.push("/articles")}>
              <SentimentVeryDissatisfiedOutlinedIcon fontSize="large" />
            </IconButton>
            <h1>No hay nada</h1>
          </div>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        alignContent="flex-start"
        style={{ marginTop: "20px" }}
      >
        <Typography variant="h4" gutterBottom>
          Total: {getCartTotal()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Cart;

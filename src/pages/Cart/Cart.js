import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { FeaturedStore } from "components";
import { useSelector } from "react-redux";
import { getCartState } from "store/slices/app";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(getCartState);
  const history = useHistory();

  return (
    <Grid container>
      <Typography variant="h4" gutterBottom>
        Articulos
      </Typography>

      <Grid container spacing={4}>
        {cart?.items.length > 0 ? (
          cart.items.map((item) => (
            <FeaturedStore key={item.title} item={item} />
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
    </Grid>
  );
};

export default Cart;

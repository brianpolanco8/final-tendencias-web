import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartState } from "store/slices/app";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const FeaturedStore = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const cart = useSelector(getCartState);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ value: [...cart.items, item] }));
    console.log("[...cart.items, item]", [...cart.items, item]);
  };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                $ {item.price}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {item.description}
              </Typography>
              <Typography component="h4" variant="h6">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleAddToCart(item)}
                >
                  Añadir al carrito
                </Button>
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={item.image}
              title={item.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

FeaturedStore.propTypes = {
  post: PropTypes.object,
};

export default FeaturedStore;

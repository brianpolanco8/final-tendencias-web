import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { FeaturedStore } from "components";
import { useSelector } from "react-redux";
import { getArticlesState } from "store/slices/app";

const Articles = () => {
  const articles = useSelector(getArticlesState);

  return (
    <Grid container>
      <Typography variant="h4" gutterBottom>
        Articulos
      </Typography>

      <Grid container spacing={4}>
        {articles &&
          articles.length > 0 &&
          articles.map((item) => (
            <FeaturedStore key={item.title} item={item} />
          ))}
      </Grid>
    </Grid>
  );
};

export default Articles;

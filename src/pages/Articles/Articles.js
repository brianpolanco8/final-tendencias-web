import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { FeaturedStore } from "components";
import { useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const items = [
    {
      title: "Medicina 1",
      price: 150,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
    {
      title: "Medicina 2",
      price: 150,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
    {
      title: "Medicina 3",
      price: 150,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
    {
      title: "Medicina 4",
      price: 150,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
    {
      title: "Medicina 5",
      price: 150,
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageText: "Image Text",
    },
  ];
  // const [articles, setArticles] = useState();

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://w912mzvgpk.execute-api.us-east-2.amazonaws.com/production/articulo/get-all"
      );
      console.log("response", response);
      // setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <Grid container>
      <Typography variant="h4" gutterBottom>
        Articulos
      </Typography>

      <Grid container spacing={4}>
        {items.map((item) => (
          <FeaturedStore key={item.title} item={item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Articles;

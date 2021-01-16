import { Grid } from "@material-ui/core";
import { FeaturedStore } from "components";
import React from "react";

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
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <FeaturedStore key={item.title} item={item} />
      ))}
    </Grid>
  );
};

export default Articles;

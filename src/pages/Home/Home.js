import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { MainFeaturedStore, FeaturedStore } from "components";
import { selectRandomImage } from "utils";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Vacuna Covid-19",
  description:
    "Occaecat cillum eu qui qui. Magna non ullamco mollit ullamco excepteur. Sit amet mollit elit nostrud enim velit ut ullamco culpa. Magna quis excepteur ex Lorem irure mollit enim mollit nulla ea adipisicing voluptate.",
  image: selectRandomImage()?.default,
  imgText: "main image description",
  price: 300,
  // linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Vacuna Moderna",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: selectRandomImage()?.default,
    price: 150,
    imageText: "Image Text",
  },
  {
    title: "Vacuna Pfizer",
    date: "Nov 11",
    price: 120,
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: selectRandomImage()?.default,
    imageText: "Image Text",
  },
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="lg"> */}
      {/* <Header title="MediMarket" sections={sections} /> */}
      <main>
        <MainFeaturedStore item={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((item) => (
            <FeaturedStore key={item.title} item={item} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* <Main title="From the firehose" posts={posts} /> */}
          {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
        </Grid>
      </main>
      {/* </Container> */}
    </React.Fragment>
  );
}

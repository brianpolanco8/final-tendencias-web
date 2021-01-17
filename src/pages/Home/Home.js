import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { MainFeaturedStore, FeaturedStore } from "components";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  // linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
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

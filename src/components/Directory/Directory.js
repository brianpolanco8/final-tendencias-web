import React from "react";
import { MenuItem } from "components/MenuItem";
import { Grid } from "@material-ui/core";
// import pills from 'assets/images/450_1000.jpeg'

const sections = [
  {
    title: "Farmaceutica",
    imageUrl: "../../assets/images/450_1000.jpeg",
  },
  {
    title: "Farmaceutica",
    imageUrl: "assets/images/450_1000.jpeg",
  },
  {
    title: "Farmaceutica",
    imageUrl: "../../assets/images/450_1000.jpeg",
  },
  {
    title: "Farmaceutica",
    imageUrl: "../../assets/images/450_1000.jpeg",
  },
  {
    title: "Farmaceutica",
    imageUrl: "../../assets/images/450_1000.jpeg",
  },
];

const Directory = () => {
  return (
    <Grid container spacing={1} style={{ marginTop: "20px" }}>
      {sections.map((section, i) => (
        <MenuItem key={i} {...section} />
      ))}
    </Grid>
  );
};

export default Directory;

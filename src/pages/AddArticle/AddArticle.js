import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Logo4 } from "assets/images";
import { getArticlesState } from "store/slices/app";
import LocalPharmacyIcon from "@material-ui/icons/LocalPharmacy";
import { addArticle } from "store/slices/app";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddArticleForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const articles = useSelector(getArticlesState);

  const onSubmit = (values) => {
    const newArticles = [...articles];
    newArticles.push({ ...values, image: Logo4 });
    console.log("newArticles", newArticles);
    dispatch(addArticle({ value: newArticles }));

    history.push("/articles");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalPharmacyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Agregar articulo
        </Typography>
        <Formik initialValues={{}} onSubmit={(values) => onSubmit(values)}>
          {({ handleSubmit, handleBlur, setFieldValue, handleChange }) => (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Nombre"
                name="title"
                autoComplete="title"
                autoFocus
                onChange={handleChange("title")}
                onBlur={handleBlur("title")}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="description"
                label="Descripción"
                id="description"
                onChange={handleChange("description")}
                onBlur={handleBlur("description")}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="price"
                label="Precio"
                id="price"
                onChange={handleChange("price")}
                onBlur={handleBlur("price")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Agregar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
      </div>
    </Container>
  );
}

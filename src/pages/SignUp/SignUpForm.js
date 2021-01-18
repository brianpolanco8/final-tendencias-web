import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { MenuItem, Select } from "@material-ui/core";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData, setIsAuth } from "store/slices/app";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  // const [selectedDate, handleDateChange] = useState(new Date());
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log(values);
    dispatch(setIsAuth({ value: true }));
    dispatch(setUserData({ value: values }));
    history.push("/articles");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik initialValues={{}} onSubmit={(values) => onSubmit(values)}>
          {({ handleSubmit, setFieldValue, handleBlur, handleChange }) => (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="nombre"
                    variant="outlined"
                    required
                    fullWidth
                    id="nombre"
                    label="Nombre"
                    autoFocus
                    onChange={handleChange("nombre")}
                    onBlur={handleBlur("nombre")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="apellido"
                    variant="outlined"
                    required
                    fullWidth
                    id="apellido"
                    label="Apellido"
                    autoFocus
                    onChange={handleChange("apellido")}
                    onBlur={handleBlur("apellido")}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="direccion"
                    label="Dirección"
                    id="direccion"
                    onChange={handleChange("direccion")}
                    onBlur={handleBlur("direccion")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="telefono"
                    label="Telefono"
                    id="telefono"
                    onChange={handleChange("telefono")}
                    onBlur={handleBlur("telefono")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="cedula"
                    label="Cedula"
                    id="cedula"
                    onChange={handleChange("cedula")}
                    onBlur={handleBlur("cedula")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                    name="userType"
                    defaultValue={"Cliente"}
                    placeholder="User Type"
                    onChange={handleChange("userType")}
                    variant="outlined"
                  >
                    <MenuItem value={"Farmacia"}>Farmacia</MenuItem>
                    <MenuItem value={"Cliente"}>Cliente</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue={new Date()}
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChange("fechaDeNacimiento")}
                    onBlur={handleBlur("fechaDeNacimiento")}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

// Correo
// Contrasena
// Direccion
// Nombre
// Telefono
// Apellido
// Cedula
// fecha de nacimiento

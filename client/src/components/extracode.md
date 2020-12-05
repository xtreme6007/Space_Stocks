{/* 
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState(""); */}

  {/* // function validateForm() { */}
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // return (
  //   // <>
  //   //       <Route exact path="/">
  //   //          {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/Login" />}
  //   //        </Route>
  //   <div className="Login">
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>First Name</Form.Label>
  //         <Form.Control
  //           autoFocus
  //           type="firstname"
  //           value={firstname}
  //           onChange={(e) => setFirstName(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>Last Name</Form.Label>
  //         <Form.Control
  //           autoFocus
  //           type="lastname"
  //           value={lastname}
  //           onChange={(e) => setLastName(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="password">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Link href="/Login" variant="body2">
  //               Already have an account? Sign in
  //             </Link>
  //       <Button block size="lg" type="submit" disabled={!validateForm()}>
  //         Sign Up
  //       </Button>
  //     </Form>
  //   </div>
  // );
}


{/* // import React, { useState } from "react";
// import { Redirect, Route } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import axios from "axios";

// function Copyright() { */}
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Snake Stocks
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// // this.state = {
// //   email: "",
// //   password: "",
// //   first_name: "",
// //   last_name: "",
// //   redirectTo: null
// // }
// //function to take the data from the form and write it to the database


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));
// export default function SignUp() {
 
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");

//   function handleuserNameinput(event) {
//     setEmail(event.target.value);
//   }

//   function handlepasswordinput(event) {
//     setPassword(event.target.value);
//   }

//   function handlefirstnameInput(event) {
//     setfirstName(event.target.value);
//   }

//   function handlelastnameInput(event) {
//     setlastName(event.target.value);
//   }
// console.log(email, password, firstName, lastName)

// const [loggedIn, setloggedIn]=useState(false)

// function handleSubmit(event) {
//   event.preventDefault();
//   const userObject = {email:email, password:password, first_name:firstName, last_name:lastName}
// console.log(userObject)
//   axios
//     .post("/signup", 
//       userObject
//     )
//     .then((response) => {
      
//       if (!response.data.console.errmsg) {
//         console.log("working as intended");
//         setloggedIn(true)
//         console.log(response);
        
               
//       } else {
//         console.log("duplicate");
//       }
//     });
// }
//   const classes = useStyles();
//   return (
//     <>
//      <Route exact path="/">
//         {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/Login" />}
//       </Route>
    {/* <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                onChange={handlefirstnameInput}
                value={firstName}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handlelastnameInput}
                value={lastName}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWid
                th
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleuserNameinput}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={handlepasswordinput}
                value={password}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    // </> */}
  /* );
} */
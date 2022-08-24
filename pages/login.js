import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    };

    console.log("username====>", username);
    console.log("password====>", password);

    const login = await fetch(`https://vast-taiga-41388.herokuapp.com/api/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const loginResponse = await login.json();

    console.log("loginresp====>", loginResponse);

    localStorage.setItem("jwt", loginResponse.jwt);

    setCookie(null, "jwt", loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    const cookies = parseCookies();
    console.log(cookies.jwt);

    if (loginResponse.jwt) {
      Router.push("/");
    } else {
      let errorMsg = loginResponse.error.message;
      alert(errorMsg);

      destroyCookie(null, "jwt");
      Router.push("/login");
    }
  }

  const paperStyle = {
    padding: 40,
    height: "70vh",
    width: 450,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <>
      <Grid style={{ height: "890px", paddingTop: "40px" }}>
        <h1 style={{ textAlign: "center", color: "red" }}>
          {" "}
          Please sign-in here to lookout the Hotels.......{" "}
        </h1>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username or Email"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={() => handleLogin()}
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography style={{ color: "blue" }}>
            {" "}
            Do you have an account ?<Link href="/signUp">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;

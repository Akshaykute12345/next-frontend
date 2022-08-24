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
import Router from "next/router";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const registerInfo = {
      username: username,
      email: email,
      password: password,
    };

    const register = await fetch(
      `https://vast-taiga-41388.herokuapp.com/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      }
    );

    const registerResponse = await register.json();
    console.log(registerResponse);

    if (registerResponse.jwt) {
      Router.push("/login");
    } else {
      let errorMsg = registerResponse.error.message;
      alert(errorMsg);
      Router.push("/signUp");
    }

    // Router.push('/payed-articles')
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
    <Grid style={{ height: "890px", paddingTop: "40px" }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter Email"
          fullWidth
          required
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter password"
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
          onClick={() => handleRegister()}
          style={btnstyle}
          fullWidth
        >
          Sign up{" "}
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography style={{ color: "blue" }}>
          {" "}
          Already signed Up ? <Link href="/login"> Sign in </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;

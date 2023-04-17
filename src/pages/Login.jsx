/** @format */

import React, { useEffect, useState } from "react";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import axios from "axios";

const Login = () => {


  useEffect(() => {
    const auth = localStorage.getItem("token");
    if(auth){
      //navigate to original page
    }
  })

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: " ",
      password: " ",
    },
    onSubmit: async(values) => {
      console.log(values)
      const data = await axios.post("/api/login", values);
      if(data.status===201){
        localStorage.setItem("token", JSON.stringify(data.authentication))
      } else {
        alert(data.message)
      }
    },
  });

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}>
      <Box
        sx={{
          display: "flex",
          height: "150px",
          width: "150px",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EFEFEF",
          position: "absolute",
          top: "180px",
          left: "860px",
        }}>
        <Avatar
          src='/images/ic_user.svg'
          alt='signinProfile'
          sx={{ height: "100px", width: "100px" }}
        />
      </Box>
      <Box
        sx={{
          height: "65px",
          width: "233px",
          position: "absolute",
          top: "350px",
          left: "815px",
          textAlign: "left",
          color: "#0B3558",
          letterSpacing: "0px",
          opacity: "1",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "50px",
        }}>
        Welcome!
      </Box>
      <Box
        sx={{
          height: "54px",
          width: "336px",
          position: "absolute",
          top: "420px",
          left: "762px",
          textAlign: "center",
        }}>
        <Typography
          sx={{
            color: "#0B3558",
            opacity: "1",
            fontFamily: "Open Sans, sans-serif",
            letterSpacing: "0px",
            fontSize: "18px",
          }}>
          Let's connect to your workspace.<br></br> Please enter your email to
          continue.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          inputProps={{
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
          sx={{
            m: 1,
            width: "500px",
            position: "absolute",
            top: "475px",
            left: "670px",
          }}
          onChange={handleChange}
          id='email'
          label='Email'
          type='text'
          name='email'
          value={values.email}
        />
        <TextField
          sx={{
            m: 1,
            width: "500px",
            position: "absolute",
            top: "550px",
            left: "670px",
          }}
          onChange={handleChange}
          variant='outlined'
          id='password'
          type='password'
          label='Password'
          name='password'
          value={values.password}
        />
        {errors.password ? <p>{errors.password}</p> : null}
        <Typography
          sx={{
            color: "#003FB9",
            opacity: "1",
            fontFamily: "Open Sans, sans-serif",
            letterSpacing: "0px",
            fontSize: "16px",
            position: "absolute",
            top: "623px",
            left: "1040px",
          }}>
          Forgot Password?
        </Typography>
        <Button
          variant='contained'
          type='submit'
          sx={{
            height: "50px",
            width: "500px",
            backgroundColor: "#003FB9",
            position: "absolute",
            top: "655px",
            left: "677px",
            textAlign: "center",
            opacity: "1",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "4px",
            color: "#FFFFFF",
            fontSize: "20px",
            textTransform: "none",
          }}>
          Sign In
        </Button>
      </form>
      <Box
        style={{
          height: "37px",
          width: "1500px",
          position: "absolute",
          top: "800px",
          left: "160px",
          display: "flex",
        }}>
        <Typography sx={{ color: "#728391", marginRight: "10px" }}>
          Powered by
        </Typography>
        <Avatar
          src='/images/b13290d8-b634-4e8d-8eab-c4d420341e3f.png'
          alt='compantLogo'
          sx={{
            height: "23px",
            width: "100px",
            marginRight: "900px",
          }}
        />
        <Typography
          sx={{
            color: "#003FB9",
            marginRight: "25px",
            fontSize: "16px",
            fontFamily: "Open Sans, sans-serif",
          }}>
          Need Help?
        </Typography>
        <Typography
          sx={{
            color: "#003FB9",
            fontSize: "16px",
            fontFamily: "Open Sans, sans-serif",
          }}>
          Privacy Policy and Terms
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;

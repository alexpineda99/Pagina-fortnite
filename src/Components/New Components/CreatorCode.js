import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function CreatorCode() {
  const { register, handleSubmit } = useForm();
  // const url = "https://fortnite-api.com/v2/creatorcode?name=mcgraw";

  let creatorcode = async (data) => {
    const url = `https://fortnite-api.com/v2/creatorcode?name=${data.code}`;
    console.log(data);
    await axios
      .get(url)

      .then((res) => {
        console.log(res.data);
      }).catch((err)=> {
        console.log(err)
      })
  };

  const onSubmit = (data) => {
    console.log(data.code);
  };

  return (
    <div className="">
      <Box
        sx={{
          flexGrow: 1,
          flexDirection: "column",
          textAlign: "center",
          marginBottom: 1,
          marginTop: 4,
        }}
      >
        Check your Creator code!
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={0}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size="small"
                {...register("code")}
              />
              <Button variant="outlined" size="large" type="submit">
                Check
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default CreatorCode;

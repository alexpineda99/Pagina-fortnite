import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Loader from "react-loader-spinner";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function CreatorCode() {
  const { register, handleSubmit } = useForm();
  let [Loading, setLoading] = useState(false);
  let [info, setInfo] = useState();
  let [msg, setMsg] = useState();
  // const url = "https://fortnite-api.com/v2/creatorcode?name=mcgraw";

  let showcode = async (data) => {
    try {
      setLoading(true);
      const url = `https://fortnite-api.com/v2/creatorcode?name=${data.code}`;
      let res = await axios.get(url);
      setInfo(res.data.data);
      console.log(info);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setInfo(undefined);
      setMsg("Creator code not found");
    }
  };

  const onSubmit = (data) => {
    console.log(data.code);
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div className="">
      <Box
        sx={{
          flexGrow: 1,
          flexDirection: "column",
          textAlign: "center",
          marginBottom: 4,
          marginTop: 2,
        }}
      >
        <h4> Check your Creator code! </h4>
        <form onSubmit={handleSubmit(showcode)}>
          <Grid
            container
            spacing={0}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Code"
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

        {Loading ? (
          <Loader
            type="Rings"
            color="#109DFA"
            height={80}
            width={80}
            /* #109DFA */
            /* #024A86 */
            /* #E69DFB */
            /* #FF689D*/
            /* #222222 */
          />
        ) : info === undefined ? (
          msg
        ) : (
          // <div className="creatorcode-div">
          //   <div xs={4}> {info.account.name} </div>
          //   <div xs={4}> {info.status} </div>
          // </div>
          <Grid sx={{marginTop: 2}} container spacing={4} rowSpacing={2} direction={"row"} >
            <Grid item xs={6}>
              <Box sx={{display: "flex", justifyContent: 'flex-end', wordBreak: "break-word"}}>Username: {info.account.name}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{display: "flex", justifyContent: 'flex-start', wordBreak: "break-word", alignItems: "center"}}>Status: {info.status} <span className={info.status === "ACTIVE" ? "green-dot" : "red-dot"}></span> </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{display: "flex", justifyContent: 'flex-end', wordBreak: "break-word"}}>Id account: {info.account.id}</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{display: "flex", justifyContent: 'flex-start', wordBreak: "break-word"}}>Verified: {info.verified ? "Verified" : "Not verified"}</Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default CreatorCode;

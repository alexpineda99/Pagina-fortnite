import "../../Assets/Css/Main.css";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import VBucks from "../../Assets/Images/V-bucks_1.png";
import Arrowback from "../../Assets/Images/arrow.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import moment from "moment";
import Box from "@mui/material/Box";
import Loader from "react-loader-spinner";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Item() {
  let history = useHistory();
  let [itemProperties, setitemProperties] = useState();
  let [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const { id } = useParams();
  const [option, setOption] = React.useState(-5);

  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  const goToPreviousPath = () => {
    history.goBack();
  };

  function capitalizeFirstLetter(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    // console.log(itemProperties);
    setLoading(true);
    const getiteminfo = async () => {
      const url = `https://fortnite-api.com/v2/cosmetics/br/${id}`;
      const result = await axios.get(url);

      console.log(result.data.data);
      setitemProperties(result.data.data);
      setLoading(false);
    };

    getiteminfo();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      {/* change main class */}
      <Navbar />
      <div className="arrow-back-div">
        <img
          src={Arrowback}
          className="arrow-back"
          onClick={goToPreviousPath}
          alt="arrowback"
        />
      </div>
      <div className="content-wrap">
        {loading ? (
          <div className="Loader">
            {" "}
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
            />{" "}
          </div>
        ) : (
          <div className="optional-content-wrap">
            <div className="main-div-item">
              <div className="item-info">
                <h1 className="item-name">{itemProperties?.name} </h1>
                <img
                  src={itemProperties?.images.icon}
                  className="item-image"
                  alt={itemProperties?.name}
                />
              </div>
            </div>
            <div className="additional-name"> Item info </div>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Grid
                container
                spacing={0}
                justifyContent={"center"}
                textAlign={"center"}
                alignItems={"center"}
                rowSpacing={0}
                sx={{ width: "100%" }}
                mt={5}
                justifyItems="center"
              >
                <Grid item xs={0} md={3}></Grid>
                <Grid item xs={12} md={3}>
                  {itemProperties?.shopHistory !== null ? (
                    <FormControl variant="standard">
                      <InputLabel id="demo-simple-select-standard-label">
                        Option
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={option}
                        onChange={handleChangeOption}
                        label="Option"
                      >
                        <MenuItem value={-5}>Latest</MenuItem>
                        {/* <MenuItem value={5}>Oldest</MenuItem> */}
                        <MenuItem value={0}>All Time in Shop</MenuItem>
                      </Select>
                      {itemProperties?.shopHistory
                        .slice(option)
                        .map((history) => (
                          <div>
                            {moment(history)
                              .utc()
                              .format("YYYY-MM-DD hh:mm:ss")}{" "}
                            - UTC
                          </div>
                        ))}
                    </FormControl>
                  ) : (
                    `Battle pass item ${itemProperties?.introduction.text}`
                  )}
                </Grid>
                <Grid item xs={12} md={3} mt={2} mb={2}>
                  <p>Rarity: {itemProperties?.rarity.displayValue}</p>
                  <p>Description: {itemProperties?.description} </p>
                </Grid>
                <Grid item xs={0} md={3}></Grid>
                <h2>Variants</h2>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginRight: "10%",
                    marginLeft: "10%",
                  }}
                >
                  {itemProperties?.variants !== null ? (
                    itemProperties?.variants[0].options.map(
                      (variant, index) => (
                        // <p>{variant?.options.map(style=> <span> {style.name} </span>)} </p>
                        <Grid key={index} sm={3} xs={6} mt={2}>
                          <Grid>
                            <img src={variant.image} alt={variant.name} sx={{width: "100%", height: "100%"}} />
                            <Grid>
                              <Grid>
                                {" "}
                                {capitalizeFirstLetter(variant.name)}{" "}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      )
                    )
                  ) : (
                    <Grid sx={{ textAlign: "center" }} xs={12}>
                      {" "}
                      This item has no variants{" "}
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Box>
          </div>
        )}
      </div>

      {/* {Itemlength.shopHistory[0]} */}
      <Footer />
    </div>
  );
}

export default Item;

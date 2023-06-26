import React from "react";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box sx={{height: "6rem", width: "100%"}} className="footer">
      <div className="footer-item">Maracaibo, Venezuela</div>
      <div className="footer-item">Alexandro Pineda</div>
      <div className="footer-item">
        &copy; Copyright 2021 Alexandro Pineda. All Rights Reserved
      </div>
    </Box>
  );
}

export default Footer;

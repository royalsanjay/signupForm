import React from "react";
import "./Header.css";
import Anzeige from "./Anzeige";
import { Button } from "@mui/material";
import Zeigen from "./Zeigen";

const Header = () => {
  const [opens, setloginOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleloginClickOpen = () => {
    setloginOpen(true);
  };

  const handleCloses = () => {
    setloginOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="navbar">
        <div className="logo">
          <img width={150} src="devzero-logo-2.webp" alt="Logo" />
        </div>
        <div>
          <ul className="menu">
            <li>
              {" "}
              <a href="/home"> Home</a>
            </li>
            <li>
              {" "}
              <a href="/services"> Services</a>
            </li>
            <li>
              {" "}
              <a href="/gallery"> Gallery</a>
            </li>
            <li>
              {" "}
              <a href="/contact us"> Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="menu">
            {" "}
            <li>
              <Button variant="outlined" onClick={handleloginClickOpen}>
                Login
              </Button>
            </li>
            <li>
              <Button variant="outlined" onClick={handleClickOpen}>
                Sign Up
              </Button>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div>
        <img width={1210} src="herosection.jpg" alt="screen" />
      </div>

      <Anzeige open={open} handleClose={handleClose} />
      <Zeigen
        opens={opens}
        handleCloses={handleCloses}
        handleClickOpen={handleClickOpen}
      />
    </div>
  );
};

export default Header;

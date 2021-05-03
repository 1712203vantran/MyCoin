import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./styles.css";

import Logo from "../../assets/img/logo.png";

import OptionLanguage from "./ButtonLanguage";

const Header = ({ onChangeLanguage }) => {
  const history = useHistory();
  // React router hook
  const dispatch = useDispatch();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className="header-appBar"
      >
        <Toolbar className="header-toolbar">
          <Grid container>
            <Grid item md={2}></Grid>

            {/* Logo */}
            <Grid item md={1} className="header-toolbarTitle">
              <Typography>
                <Link to={"/"}>
                  <Button>
                    <img src={Logo} alt="Now Logo" className="header-logo" />
                  </Button>
                </Link>
              </Typography>
            </Grid>

            {/* Space beetween */}
            <Grid item md={4}></Grid>

            {/* Buy ETH*/}
            <Grid item md={1} className="header-tag">
              <Button className="header-buttonInfo">
                <CreditCardIcon className="header-icon" />
                <span style={{ display: "inline" }}>Buy ETH</span>
              </Button>
            </Grid>

            {/* Info */}
            <Grid item md={1} className="header-tag">
              <Button className="header-buttonInfo">
                <div style={{ display: "inline" }}>Info</div>
                <div className="header-caret"></div>
              </Button>
            </Grid>

            {/* Language */}
            <Grid item md={1} className="header-tag">
              <OptionLanguage />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

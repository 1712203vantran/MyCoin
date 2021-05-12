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
import action from "../../storage/action";
import Logo from "../../assets/img/logo.png";

import OptionLanguage from "./ButtonLanguage";

const Header = ({ onChangeLanguage }) => {
  const history = useHistory();
  // React router hook
  const dispatch = useDispatch();

  // wallet
  const { key, block } = useSelector((state) => state.wallet);

  const onTrans = () => {
    history.push("/transactions");
  };

  const onCreateWallet = () => {
    dispatch(action.walletAction.create(null, null));
    history.push("/");
  };

  const onViewWallet = () => {
    history.push("/wallet");
  };

  const onCreateTrans = () => {
    history.push("/create-trans");
  }

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
            <Grid item md={2}></Grid>
            {/* Wallet */}
            <Grid item md={1} className="header-tag">
              <Button className="header-buttonInfo" onClick={onViewWallet}>
                <span style={{ display: "inline" }}>Wallet</span>
              </Button>
            </Grid>
            {/* Trans */}
            <Grid item md={1} className="header-tag">
              <Button className="header-buttonInfo" onClick={onCreateTrans}>
                <span style={{ display: "inline" }}>Trans</span>
              </Button>
            </Grid>
            {/* Buy ETH*/}
            <Grid item md={2} className="header-tag">
              <Button className="header-buttonInfo" onClick={onTrans}>
                <span style={{ display: "inline" }}>View All Transaction</span>
              </Button>
            </Grid>

            {/* Info */}
            <Grid item md={1} className="header-tag">
              <Button className="header-buttonInfo" onClick={onCreateWallet}>
                <div style={{ display: "inline" }}>
                  {key === null ? "Create Wallet" : "Sign Out"}
                </div>
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

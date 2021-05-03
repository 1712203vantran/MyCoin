import {
  Grid,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import action from "../../storage/action";
import "./styles.css";

const CreatePage = () => {
  // history
  const history = useHistory();
  const dispatch = useDispatch();

  const createIndex = useSelector((state) => state.createIndex);

  const [index, setIndex] = useState(createIndex);
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onChangeMethod = (i) => {
    if (i !== index) {
      setIndex(i);
      dispatch(action.createIndexAction.choose(i));
    }
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  // region local handle
  const handleClickShowPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  let show = null;
  switch (index) {
    case 0:
      show = <div></div>;
      break;
    case 1:
      show = (
        <>
          <div
            style={{ textAlign: "center", fontSize: "25px", marginTop: "50px" }}
          >
            Your Password
          </div>

          <OutlinedInput
            className="createpage__input"
            id="outlined-adornment-password"
            placeholder="Password"
            type={passwordVisible ? "text" : "password"}
            onChange={handleChangePassword}
            startAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="start"
                >
                  <Lock />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  aria-label="toggle password visibility"
                  edge="start"
                >
                  {passwordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
            
          <button className="createpage__buttonNext">NEXT</button>
        </>
      );
      break;
    case 2:
      show = <div></div>;
      break;
  }

  return (
    <>
      <Grid container className="homepage__container">
        <Grid item md={3}></Grid>
        <Grid item container md={6} className="createpage__main">
          <Grid item md={12}>
            <div className="createpage__title">Get a New Wallet</div>
          </Grid>

          <Grid item md={12}>
            <div className="createpage__subTitle">
              <span>Already have a wallet?</span>
              <span style={{ color: "#05c0a5" }}> Access My Wallet</span>
            </div>
          </Grid>

          <Grid item container md={12} style={{ marginTop: "40px" }}>
            <Grid
              item
              md={4}
              className={
                index === 0
                  ? "createpage__element createpage__element-active"
                  : "createpage__element"
              }
              style={{ borderRadius: "10px 0 0 0" }}
              onClick={() => onChangeMethod(0)}
            >
              <div className="createpage__elementTitle">MEW Wallet</div>
            </Grid>
            <Grid
              item
              md={4}
              className={
                index === 1
                  ? "createpage__element createpage__element-active"
                  : "createpage__element"
              }
              onClick={() => onChangeMethod(1)}
            >
              <div className="createpage__elementTitle">By Keystore File</div>
            </Grid>
            <Grid
              item
              md={4}
              className={
                index === 2
                  ? "createpage__element createpage__element-active"
                  : "createpage__element"
              }
              style={{ borderRadius: "0 10px 0 0" }}
              onClick={() => onChangeMethod(2)}
            >
              <div className="createpage__elementTitle">By Mnemonic Phrase</div>
            </Grid>

            <Grid item md={12} className="createpage__mainShow">
              {show}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePage;

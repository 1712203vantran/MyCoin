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
import service from "./service";
import "./styles.css";

const TransPage = () => {
  // history
  const history = useHistory();
  const dispatch = useDispatch();
  // state
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState(0);

  // wallet
  const { key, block } = useSelector((state) => state.wallet);
  if (key === null) {
    history.push("/");
  }

  const onChangeToAddress = (e) => {
    setToAddress(e.target.value);
  };

  const onChangeCoin = (e) => {
    setAmount(e.target.value);
  };

  const onTrans = () => {
    (async () => {
        try {
          // request to server
          const { errorCode, data } = await service.trans(key, toAddress, amount);
         
          if (errorCode === true) {
            // history
            history.push("/wallet");
          }     
        } catch (e) {
      
        }
      })();
  };

  return (
    <>
      <Grid container className="tran__container">
        <Grid item md={12}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              marginBottom: "50px",
            }}
          >
            Create Transaction
          </div>
        </Grid>
        <Grid item md={12}>
          <div
            style={{
              textAlign: "left",
              marginLeft: "10%",
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            From Address
          </div>
          <OutlinedInput
            className="tran__input"
            id="outlined-adornment-password"
            placeholder=""
            type="text"
            value={key.getPublic("hex")}
            disabled
          />
        </Grid>
        <Grid item md={12}>
          <div
            style={{
              textAlign: "left",
              marginLeft: "10%",
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            To Address
          </div>
          <OutlinedInput
            className="tran__input"
            id="outlined-adornment-password"
            placeholder=""
            type="text"
            onChange={onChangeToAddress}
          />
        </Grid>
        <Grid item md={12}>
          <div
            style={{
              textAlign: "left",
              marginLeft: "10%",
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            Amount
          </div>
          <OutlinedInput
            className="tran__input"
            id="outlined-adornment-password"
            placeholder=""
            type="number"
            onChange={onChangeCoin}
          />
        </Grid>

        <Grid item md={12}>
        <button className="tran__btn" onClick={onTrans}>OK</button>
        </Grid>
      </Grid>
    </>
  );
};

export default TransPage;

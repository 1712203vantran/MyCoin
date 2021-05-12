import {
  Grid,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import action from "../../storage/action";
import service from "./service";
import "./styles.css";

const WalletPage = () => {
  // history
  const history = useHistory();
  const dispatch = useDispatch();
  // state
  const [data, setData] = useState({ coin: 0, transactions: [] });
  // selector
  // wallet
  const { key, block } = useSelector((state) => state.wallet);

  if (key === null) {
      history.push("/");
  }

  useEffect(() => {
    (async () => {
      try {
        const { errorCode, data } = await service.getWallet(key);

        if (errorCode) {
          setData(data);
        }
      } catch (e) {
        alert("Something was wrong");
        console.error(`[WALLET]: ${e.message}`);
      }
    })();
  }, []);

  const trans = data.transactions.map((tran, key) => {
    return (
      <tr key={key}>
        <td style={{ width: "5%" }}>{key + 1}</td>
        <td style={{ width: "40%" }}>{tran.fromAddress === null ? "Mining" : tran.fromAddress}</td>
        <td style={{ width: "40%", wordWrap: "break-word" }}>{tran.toAddress}</td>
        <td style={{ width: "15%" }}>{tran.amount}</td>
      </tr>
    );
  });

  return (
    <>
      <Grid container className="wallet__container">
        <Grid item md={4}></Grid>
        <Grid item md={4}>
          <div className="wallet__div">
            <div className="wallet__title">Your wallet</div>
            <div className="wallet__coin">
              <b>Coin: </b>
              {data.coin}
            </div>
            <div className="wallet__hash">
              <b>Hash: </b>
              {block.hash}
            </div>
            <div className="wallet__hash">
              <b>Previous Hash: </b>
              {block.previousHash}
            </div>
            <div className="wallet__coin">
              <b>Timestamp: </b>
              {block.timestamp}
            </div>
          </div>
        </Grid>
        <Grid item md={12}>
            <div style={{fontSize: "25px", fontWeight: "bold", textAlign: "center"}}>
                Transactions
            </div>
        </Grid>
        <Grid item md={12}>
          <table className="Wallet__table">
            <tr>
              <th>STT</th>
              <th>From Address</th>
              <th>To Address</th>
              <th>Amount</th>
            </tr>
            {trans}
          </table>
        </Grid>
      </Grid>
    </>
  );
};

export default WalletPage;

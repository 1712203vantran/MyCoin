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
  
  const TransPage = () => {
    // history
    const history = useHistory();
    const dispatch = useDispatch();
    // state
    const [trans, setTrans] = useState([]);
  
    useEffect(() => {
      (async () => {
        try {
          const { errorCode, data } = await service.getTransactions();
  
          if (errorCode) {
            setTrans(data.transactions);
          }
        } catch (e) {
          alert("Something was wrong");
          console.error(`[WALLET]: ${e.message}`);
        }
      })();
    }, []);
  
    const transactions = trans.map((tran, key) => {
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
        <Grid container className="trans__container">
          <Grid item md={12}>
              <div style={{fontSize: "25px", fontWeight: "bold", textAlign: "center"}}>
                  Transactions
              </div>
          </Grid>
          <Grid item md={12}>
            <table className="trans__table">
              <tr>
                <th>STT</th>
                <th>From Address</th>
                <th>To Address</th>
                <th>Amount</th>
              </tr>
              {transactions}
            </table>
          </Grid>
        </Grid>
      </>
    );
  };
  
  export default TransPage;
  
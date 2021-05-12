import { combineReducers } from "redux";
import createIndexReducer from "./service/createIndex";
import walletReducer from "./service/wallet";

const reducer = combineReducers({
    createIndex: createIndexReducer,
    wallet: walletReducer
});

export default reducer;

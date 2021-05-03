import { combineReducers } from "redux";
import createIndexReducer from "./service/createIndex";

const reducer = combineReducers({
    createIndex: createIndexReducer
});

export default reducer;

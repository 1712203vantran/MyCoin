import TAG from "../../tag";

const INITIAL_STATE = 0;

const createIndexReducer = (index = INITIAL_STATE, action) => {
    switch (action.type) {
        case TAG.CREATE_INDEX.CHOOSE:
            return action.payload.index;
        default:
            return index;
    }
};

export default createIndexReducer;

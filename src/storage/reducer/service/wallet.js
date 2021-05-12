import TAG from "../../tag";

const INITIAL_STATE = {
    key: null,
    block: null
};

const walletReducer = (wallet = INITIAL_STATE, action) => {
    switch (action.type) {
        case TAG.WALLET.CREATE:
            return {
                ...wallet,
                key: action.payload.key,
                block: action.payload.block
              };
        default:
            return wallet;
    }
};

export default walletReducer;

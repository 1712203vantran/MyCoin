import TAG from "../tag";

const action = {
    create: (key, block) => ({
        type: TAG.WALLET.CREATE,
        payload: { key: key, block: block }
    }),
};

export default action;

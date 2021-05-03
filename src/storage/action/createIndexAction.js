import TAG from "../tag";

const action = {
    choose: (index) => ({
        type: TAG.CREATE_INDEX.CHOOSE,
        payload: { index }
    }),
};

export default action;

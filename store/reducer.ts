
export const TestIntialState = {
    msg : true,

    user: {},
    requestMyProject: []
};


const TestReducer = (state = TestIntialState, action) => {
        switch(action.type) {
            
            case "TSET_REDUCER" : 
                return {
                    ...state,
                    msg : !state.msg,
                };
            default: 
                throw new Error("Doesn't have action type");

        }
    }

    export default TestReducer
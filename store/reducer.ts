
export const TestIntialState = {
    msg : false,

    user: {},
    requestMyProject: []
};


const TestReducer = (state = TestIntialState, action) => {
        switch(action.type) {
            
            case "TEST_REDUCER" : 
                return {
                    ...state,
                    msg : !state.msg,
                };
            default: 
                throw new Error("Doesn't have action type");

        }
    }

    export default TestReducer
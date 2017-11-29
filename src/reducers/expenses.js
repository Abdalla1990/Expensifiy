const expensesReducerDefaultState = [];


export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];


        case 'REMOVE_EXPENSE':
            return state.filter((ex) => {
                return ex.id !== action.expense.id; // this is the only condition that will not return a value 
            });

        case 'EDIT_EXPENSE':
            return state.map((ex) => {
                if (ex.id === action.id) {
                    // using spread operator with objects >> { ...Obj , newKey or override existing key} returns the same object with overrided values or new values 
                    return {...ex,
                        ...action.updates
                    }

                } else {
                    return ex
                }
            })

        default:
            return state;
    }

};
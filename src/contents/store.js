const { createStore } = require("redux");

const items = ['bob', 'smith', 'alice']

const initialState = {
    items: [],
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'load_item':
            return{
                ...state,
                items
            }
        default:
            return state;
    }
};

export const store = createStore(reducer)

export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';


export const addCounter = () => {
    return {
        type: ADD_COUNTER
    }
};

export const removeCounter = (i) => {
    return {
        type: REMOVE_COUNTER,
        index: i
    }
};

export const incrementCounter = (i) => {
    return {
        type: INCREMENT_COUNTER,
        index: i
    }
};

export const decrementCounter = (i) => {
    return {
        type: DECREMENT_COUNTER,
        index: i
    }
};


function todoApp(state = [], action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if(index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            });
        default:
            return state
    }
}

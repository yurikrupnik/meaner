

export default (state = ['a','vb'], action) => {
    switch (action.type) {
        // case SET_VISIBILITY_FILTER:
        //     return Object.assign({}, state, {
        //         visibilityFilter: action.filter
        //     });
        // case ADD_TODO:
        //     return Object.assign({}, state, {
        //         todos: [
        //             ...state.todos,
        //             {
        //                 text: action.text,
        //                 completed: false
        //             }
        //         ]
        //     });
        // case TOGGLE_TODO:
        //     return Object.assign({}, state, {
        //         todos: state.todos.map((todo, index) => {
        //             if(index === action.index) {
        //                 return Object.assign({}, todo, {
        //                     completed: !todo.completed
        //                 })
        //             }
        //             return todo
        //         })
        //     });
        default:
            return state
    }
}


const todoReducer = (state, action) => {
    if (action.type === "TOGGLE_TODO") {
        return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
    } else if (action.type === "INIT_TODOS") {
        return action.payload;
    } else if (action.type === "ADD_TODO") {
        return [...state, { id: state.length + 1, task: action.payload, completed: false }];
    } else if (action.type === "FILTER_TODO") {
        if (action.payload === "all") {
            return [...state];
        } else if (action.payload === "completed") {
            return state.filter((todo) => todo.completed);
        } else if (action.payload === "uncompleted") {
            return state.filter((todo) => !todo.completed);
        }
    } else {
        return state;
    }
};

export { todoReducer };

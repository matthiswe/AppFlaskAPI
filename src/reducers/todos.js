
let initialState = [];

function todos(state = initialState, action) {
    if (action.type === "ADD_TODO") {
        let newState = []
        for(let todo of state) {
            newState.push(todo);
        }
        let maxTodoId = 0;
        for(let todo of state) {
            if (todo.id > maxTodoId) {
                maxTodoId = todo.id;
            }
        }
        newState.push({id: maxTodoId + 1, title: action.title})
        return newState;
    }
    return state;
}

export default todos;
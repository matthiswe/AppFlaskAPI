
let initialState = [];

function wiki(state = initialState, action) {
    if (action.type === "SEARCH") {
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
        newState.push({id: maxTodoId + 1, hist: action.hist})
        return newState;
    } else {
        return state;
    }
}
export default wiki;
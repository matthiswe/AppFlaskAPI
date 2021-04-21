
let initialState = 0;

function counter(state = initialState, action) {
    if (action.type === "INCREMENT") {
        if (state === 10){return state;}
        else {return state + 1}
    } else if(action.type === "DECREMENT") {
        return state - 1;
    } else {
        return state;
    }
}
export default counter;
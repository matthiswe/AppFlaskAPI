export function addTodo (title){
    return {type:"ADD_TODO", title: title};
}

export function delTodo (id){
    return {type:"DEL_TODO", id: id}
}

export function incrementCounter() {
    return {type: "INCREMENT"};
}

export function decrementCounter() {
    return {type: "DECREMENT"};
}

export function wikiSearch(hist){
    return {type: "SEARCH", hist: hist};
}
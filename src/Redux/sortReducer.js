const intialState = {
    item : "Featured",
    newSize: "",
    newIndex: ""
}


function sortReducer(state=intialState, action) {

    console.log("state:", state);

    console.log("type:", action.type);
    console.log("payload:", action.payload);
    

    switch(action.type ) {

        case "addSort":
            const  newSort = {...state, item: action.payload}
            console.log("newSort:", newSort);
            return newSort
        case "updateSize":
            const newSize = {...state, newSize: action.payload}
            console.log("newSize:", newSize);
            return newSize
        case "updateIndex":
            const newIndex = {...state, newIndex: action.payload}
            console.log("newIndex:", newIndex);
            return newIndex
        default:
            return state
    }
    

}


export default sortReducer;
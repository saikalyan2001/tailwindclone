const intialState = {
    item : "Featured",
    newSize: "",
    newIndex: "",
    product: [],
    galleryData: []
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
        case "updateProduct":
            const newProduct = {...state, product: action.payload}
            console.log("newProduct yes:", newProduct);
            return newProduct
        case "galleryData":
            const galleryData = {...state, galleryData: action.payload}
            console.log("galleryData at red:", galleryData);
            return galleryData
        default:
            return state
    }
    

}


export default sortReducer;
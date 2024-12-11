import { createStore } from "redux";
import sortReducer from "../Redux/sortReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION || window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(sortReducer ,composeEnhancers)

store.subscribe( () => {console.log("currentstate", store.getState());
})

export default store;
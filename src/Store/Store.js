import { createStore } from "redux";
import sortReducer from "../Redux/sortReducer";

const store = createStore(sortReducer)

export default store;
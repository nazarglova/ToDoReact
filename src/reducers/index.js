import {combineReducers} from "redux";
import itemsReducer from "./items";

const allReducers = combineReducers({
	items: itemsReducer,
});
export default allReducers;
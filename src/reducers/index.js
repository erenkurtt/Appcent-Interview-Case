import {combineReducers} from "redux";
import { ApiKey , langParam, Url} from './ApiReducer';


const reducers = combineReducers({
    ApiKey,
    langParam,
    Url
});

export default reducers;

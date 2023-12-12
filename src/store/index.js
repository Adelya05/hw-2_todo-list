import { createStore } from 'redux';
import { reducers as rootReducer} from './redusers.js';


export const store = createStore(rootReducer)
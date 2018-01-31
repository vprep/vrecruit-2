import { combineReducers } from 'redux';
import RecruitmentReducer from './reducer-past-recruitments';

const rootReducer = combineReducers({
  recruitments: RecruitmentReducer
});

export default rootReducer;

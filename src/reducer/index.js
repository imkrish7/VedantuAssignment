import { combineReducers } from 'redux';
import { userInfoResponse, repoListResponse } from './userreducers'

const rootReducer = combineReducers({
	userInfoResponse,
	repoListResponse
})

export default rootReducer;
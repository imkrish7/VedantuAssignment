import { getActionStates } from '../Utilities';
import { USER_INFO, REPO_LIST } from '../actions/useractions';
import { successState, errorState, loadingState} from './defaultStates';
export const userInfoResponse = (state={}, action ) => {

	switch(action.type){
		case getActionStates(USER_INFO).success:
			return {...successState, data: action.data}
		case getActionStates(USER_INFO).inProgress:
			return { ...loadingState, loading: action.isLoading};
		case getActionStates(USER_INFO).failure:
			return { ...errorState,error: action.error};
		default:
			return state;
	}
}
export const repoListResponse = (state={}, action ) => {

	switch (action.type) {
		case getActionStates(REPO_LIST).success:
			return { ...successState, data: action.data };
		case getActionStates(REPO_LIST).inProgress:
			return { ...loadingState, loading: action.isLoading };
		case getActionStates(REPO_LIST).failure:
			return { ...errorState, error: action.error };
		default:
			return state;
	}


}
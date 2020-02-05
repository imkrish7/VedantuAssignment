import { getActionStates } from '../Utilities';
import axios from 'axios';
import {loadingState} from '../reducer/defaultStates';
export const USER_INFO = "USER_INFO";
export const REPO_LIST = "REPO_LIST";

const APIRequest = (dispatch, path, loadingAction, successAction, errorAction) => {
	let headers = {
		'Content-Type': 'application/json'
	}
	let reqObj = {
		method: 'GET',
		url: path,
		headers
	}

	if(dispatch && loadingAction) 
		dispatch(loadingAction(true));

	axios(reqObj).then(result => {
		if(dispatch && loadingAction){
			dispatch(loadingAction(false));
		}
		if(dispatch && successAction){
			dispatch(successAction(result.data));
		}
	}).catch(error =>{
		if(dispatch && errorAction)
			dispatch(errorAction(error.response.data))
	})
}


const userInfoLoading = (isLoading) => {
	return{
		type: getActionStates(USER_INFO).inProgress,
		isLoading
	}
}

const userInfoError = (error)=>{
	return{
		type: getActionStates(USER_INFO).failure,
		error
	}
}

const userInfoSuccess = (data)=> {
	return{
		type: getActionStates(USER_INFO).success,
		data
	}
}

export const getUserInfo = (params) => {

	const url = 'https://api.github.com/users/supreetsingh247';

	return dispatch => APIRequest(dispatch, url, userInfoLoading, userInfoSuccess, userInfoError);
}

const repoListLoading = (isLoading) => {
	return { type: getActionStates(REPO_LIST).inProgress, isLoading };
}

const repoListError = (error)=>{
	return { type: getActionStates(REPO_LIST).failure, error };
}

const repoListSuccess = (data)=> {
	return { type: getActionStates(REPO_LIST).success, data };
}

export const getRepoList = (params) => {

	const url = 'https://api.github.com/users/supreetsingh247/repos';

	return dispatch => APIRequest(dispatch, url, repoListLoading, repoListSuccess, repoListError);
}


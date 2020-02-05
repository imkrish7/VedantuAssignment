import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Repositery from './Repositery';
class Profile extends Component{


	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="container">
				<div className="profile">
					<UserInfo />
					<Repositery />
				</div>
			</div>
		)
	}
}

export default Profile;
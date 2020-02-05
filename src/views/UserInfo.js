import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/useractions';
class UserInfo extends Component{

	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.props.getUserInfo({});
	}

	render(){
		return <div className="userinfo">
				{this.props.userInfoResponse && this.props.userInfoResponse.data && <React.Fragment>
						<div className="imageWrapper">
							<img className="profileimg" src={this.props.userInfoResponse.data.avatar_url} />
						</div>
						<div className="name_and_username">
							<h1 className="name">
								{this.props.userInfoResponse.data.name || "User"}
							</h1>
							<p className="username">
								{this.props.userInfoResponse.data.login || "User name"}
							</p>
						</div>
						<div className="work">
							{this.props.userInfoResponse.data.bio || "About user"}
						</div>
						<div className="editbtn">
							<button className="btn">Edit bio</button>
						</div>
						<div className="otherinfo">
							<div className="lastCompany">
								<span className="icon">
									<i className="fas fa-user-friends" />
								</span>
								<span className="text">
									{this.props.userInfoResponse.data.company || "No Company"}
								</span>
							</div>
							<div className="location">
								<span className="icon">
									<i className="fas fa-map-marker-alt" />
								</span>
								<span className="text">
									{this.props.userInfoResponse.data.location || "Some Country"}
								</span>
							</div>
							<div className="mail">
								<span className="icon">
									<i className="fas fa-envelope" />
								</span>
								<span className="text">
									{this.props.userInfoResponse.data.email || "example@mail.com"}
								</span>
							</div>
						</div>
					</React.Fragment>}
			</div>;
	}
}

const mapStateToProps = state => {
	return {
		userInfoResponse: state.userInfoResponse
	}
}

const mapDispatchToProps = dispatch => {
	return{
		getUserInfo: params => dispatch(getUserInfo(params))

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

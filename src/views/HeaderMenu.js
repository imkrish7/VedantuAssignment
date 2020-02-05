import React, { Component } from 'react';

class HeaderMenu extends Component{

	constructor(props){
		super(props);
		this.state = {
			selecetedOption: "overviews"
		}
	}

	selectOption = (str)=>{
		this.setState({
			selecetedOption: str
		})
	}

	render(){
		return <nav className="nav">
				<ul className="list">
					<li onClick={() => this.selectOption('overviews')} className={this.state.selecetedOption == 'overviews' ? 'list-item active' : 'list-item'}>
						<span className="list-item-text">Overviews</span>
					</li>
					<li onClick={() => this.selectOption('repositeries')} className={this.state.selecetedOption == 'repositeries' ? 'list-item active' : 'list-item'}>
						<span className="list-item-text">Repositeries</span>
					</li>
					<li onClick={() => this.selectOption('stars')} className={this.state.selecetedOption == 'stars' ? 'list-item active' : 'list-item'}>
						<span className="list-item-text">Stars</span>
					</li>
					<li onClick={() => this.selectOption('followers')} className={this.state.selecetedOption == 'followers' ? 'list-item active' : 'list-item'}>
						<span className="list-item-text">Followers</span>
					</li>
					<li onClick={() => this.selectOption('following')} className={this.state.selecetedOption == 'following' ? 'list-item active' : 'list-item'}>
						<span className="list-item-text">Following</span>
					</li>
				</ul>
			</nav>;
	}

}

export default HeaderMenu;
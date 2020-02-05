import React, { Component } from 'react';

class RepoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="repositery">
				<ul className="repos_list">
					{this.props.data.map((repo, ind) => {
						return (
							<li key={ind} className="repos_list-item">
								<div className="repo_name">
									{repo.name}
								</div>
								<div className="repos_fork">Fork from user</div>
								<div className="repos_description">
									{repo.description}
								</div>
								<div className="repos_tag">
									<span className="repos_language">
										<span className="circle" />
										<span>
											{repo.language}
										</span>
									</span>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default RepoList;

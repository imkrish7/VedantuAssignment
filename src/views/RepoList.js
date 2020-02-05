import React, { Component } from 'react';
import { formateDay } from '../Utilities';

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
								<div className="repos_description">
									{repo.description}
								</div>
								<div className="repos_tag">{
									repo.language && 
								
									<span className="repos_language">
										<span className="circle" />
										<span>
											{repo.language}
										</span>
								
									</span>
									}
									<span className="update">Updated { formateDay(repo.updated_at)}</span>
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

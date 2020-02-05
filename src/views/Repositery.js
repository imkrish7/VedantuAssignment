import React, { Component } from 'react';
import { getRepoList, getUserInfo } from '../actions/useractions';
import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import SearchBox from './SearchBox';
import RepoList from './RepoList';
class Repositery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			repoList: [],
			query: '',
			type: 'all',
			language: 'all',
			filter: [],
		};
	}
	componentDidMount() {
		this.props.getRepoList({});
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.repoListResponse.success &&
			this.props.repoListResponse.data &&
			this.props.repoListResponse != prevProps.repoListResponse
		) {
			this.setState({
				repoList: [...this.props.repoListResponse.data],
				filterList: [...this.props.repoListResponse.data],
			});
		}
	}

	handleChange = e => {
		const { name, value } = e.target;
		console.log(name, value);
		this.setState(
			{
				[name]: value,
			},
			this.filter
		);
	};

	filter = () => {
		this.setState({
			repoList: this.state.filterList.filter(repo => {
				if (
					this.state.query.length > 0 &&
					this.state.query == repo.name &&
					(this.state.type == 'all' && this.state.language == 'all')
				) {
					return repo;
				} else if (
					this.state.query.length > 0 &&
					this.state.query == repo.name &&
					this.state.type == 'all' &&
					(this.state.language != 'all' &&
						repo.language &&
						this.state.language == repo.language.toLowerCase())
				) {
					return repo;
				} else if (
					this.state.query.length > 0 &&
					this.state.query == repo.name &&
					this.state.language == 'all' &&
					repo.language &&
					(this.state.type != 'all' && this.state.type == 'public' && !repo.private)
				) {
					return repo;
				} else if (
					this.state.query.length > 0 &&
					this.state.language != 'all' &&
					this.state.query == repo.name &&
					repo.language &&
					repo.language.toLowerCase() == this.state.language &&
					(this.state.type != 'all' && this.state.type == 'public' && !repo.private)
				) {
					return repo;
				} else if (
					this.state.query.length > 0 &&
					this.state.language != 'all' &&
					this.state.query == repo.name &&
					repo.language &&
					repo.language.toLowerCase() == this.state.language &&
					(this.state.type != 'all' && this.state.type == 'private' && repo.private)
				) {
					return repo;
				} else if (
					this.state.query.length > 0 &&
					this.state.query == repo.name &&
					this.state.language == 'all' &&
					repo.language &&
					(this.state.type != 'all' && this.state.type == 'private' && repo.private)
				) {
					return repo;
				} else if (
					this.state.query.length == 0 &&
					this.state.type == 'all' &&
					(this.state.language != 'all' &&
						repo.language &&
						this.state.language == repo.language.toLowerCase())
				) {
					return repo;
				} else if (
					this.state.query.length == 0 &&
					this.state.language == 'all' &&
					(this.state.type != 'all' && this.state.type == 'public' && !repo.private)
				) {
					return repo;
				} else if (
					this.state.query.length == 0 &&
					this.state.language == 'all' &&
					(this.state.type != 'all' && this.state.type == 'private' && repo.private)
				) {
					return repo;
				} else if (
					this.state.query.length == 0 &&
					this.state.language != 'all' &&
					repo.language &&
					repo.language.toLowerCase() == this.state.language &&
					(this.state.type != 'all' && this.state.type == 'private' && repo.private)
				) {
					return repo;
				} else if (
					this.state.query.length == 0 &&
					this.state.language != 'all' &&
					repo.language &&
					repo.language.toLowerCase() == this.state.language &&
					(this.state.type != 'all' && this.state.type == 'public' && !repo.private)
				) {
					return repo;
				}else if (this.state.query.length == 0 && this.state.language == 'all' && this.state.type == 'all') {
							return repo;
						}
			}),
		});
	};

	render() {
		return (
			<div className="repos">
				<HeaderMenu />
				<div className="searchbox_container">
					<div className="formwrapper">
						<form className="form">
							<input
								onChange={this.handleChange}
								value={this.state.value}
								name="query"
								className="input"
								type="text"
								placeholder="Search repositeries..."
							/>
							<div className="filter">
								<label className="label">
									Type:
									<select
										value={this.state.type}
										onChange={this.handleChange}
										name="type"
										className="type"
									>
										<option value="all">all</option>
										<option value="public">Public</option>
										<option value="private">Private</option>
									</select>
								</label>
								<label className="label">
									Language:
									<select
										value={this.state.language}
										onChange={this.handleChange}
										name="language"
										className="language"
									>
										<option value="all">all</option>
										<option value="javascript">Javascript</option>
										<option value="typescript">Typescript</option>
										<option value="html">HTML</option>
										<option value="css">CSS</option>
									</select>
								</label>
							</div>
						</form>
						<div className="newbtn">
							<button className="new_btn">New</button>
						</div>
					</div>
				</div>
				{this.state.repoList.length > 0 && <RepoList data={this.state.repoList} />}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getRepoList: params => dispatch(getRepoList(params)),
	};
};

const mapStateToProps = state => {
	return {
		repoListResponse: state.repoListResponse,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositery);

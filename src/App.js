import React from 'react';
import './App.css';
import Profile from './views/Profile';
import { Provider } from 'react-redux';
import configureStore from './store/index';

const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Profile />
			</div>
		</Provider>
	);
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import TopMenu from './components/TopMenu';

import { Home, Reservation, Search } from './views';
import './App.css';

// this is basic navigation structure
const Routing = () => (
	<div>
		<TopMenu />
		<Route exact path='/' component={Home} />
		<Route exact path='/reservation' component={Reservation} />
		<Route path='/search' component={Search} />
	</div>
);

const App = () => (
	<div className='App'>
		<Routing />
	</div>
);

export default App;

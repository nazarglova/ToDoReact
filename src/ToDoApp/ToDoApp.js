import React from 'react';
import Field from './Field';
import ListGroup from './ListGroup';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from '../reducers/index';
import './styles.css';

const store = createStore(allReducers);

export default () => {
	return (
		<Provider store={store}>
			<div>
				<Field />
				<ListGroup />
			</div>
		</Provider>
	);
};
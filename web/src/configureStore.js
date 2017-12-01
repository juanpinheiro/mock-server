import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import middleware from './middleware';

const configureStore = () => {
	return createStore(
		app,
		applyMiddleware(middleware)
	);
};

export default configureStore;

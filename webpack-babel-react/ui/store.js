import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import {watchLoadMovies} from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer, 
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchLoadMovies);

export default store;

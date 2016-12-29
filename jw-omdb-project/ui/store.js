import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';

import { watchLoadRequests } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer, 
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchLoadRequests);

export default store;

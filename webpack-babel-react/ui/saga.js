import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {fetchSearchResults} from './api/omdb';

export function* loadMovies(action) {
  try {
  	console.log("load movies generator");
  	const movies = yield call(fetchSearchResults, action.value);
    yield put({type: 'MOVIES_RECEIVED', movies});
  } catch (error) {
    yield put({type: 'LOAD_MOVIE_FAILURE', error})
  }
}

export function* watchLoadMovies() {
  console.log("sagas watch load movies");
  yield* takeEvery('LOAD_MOVIES', loadMovies);
}


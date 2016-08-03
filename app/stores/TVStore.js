import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../AppDispatcher';
import TVConstants from '../actions/constants';
import _ from 'lodash';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let store = {
    genres: [],
    movies: []
}

let TVStore = {

    getState() {
        return store;
    },

    addListener(callback) {
        return __emitter.addListener(CHANGE_EVENT, callback);
    }

};

TVStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
    case TVConstants.GET_GENRES:
        store.genres = [] ;
        __emitter.emit(CHANGE_EVENT);
        break;

    case TVConstants.GET_GENRES_SUCCESS:
        store.genres = action.genres;
        __emitter.emit(CHANGE_EVENT);
        break;

    case TVConstants.GET_MOVIES:
        store.movies = [] ;
        __emitter.emit(CHANGE_EVENT);
        break;

    case TVConstants.GET_MOVIES_SUCCESS:
        store.movies = action.movies;
        __emitter.emit(CHANGE_EVENT);
        break;

    }

});

export default TVStore;

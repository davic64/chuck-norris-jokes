import { GET_CHUCK_JOKE, GET_CHUCK_CATEGORIES, SET_LOADING } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_CHUCK_JOKE:
            return {
                ...state,
                joke: action.payload,
                loading: false,
            };
        case GET_CHUCK_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

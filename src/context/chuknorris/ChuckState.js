/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';

// External Components
import axios from 'axios';
import PropTypes from 'prop-types';

// Context
import ChuckContext from './chuckContext';
import ChuckReducer from './chuckReducer';

import { GET_CHUCK_JOKE, GET_CHUCK_CATEGORIES, SET_LOADING } from '../types';

const ChuckState = ({ children }) => {
    const api = axios.create({
        baseURL: 'https://api.chucknorris.io/jokes',
    });

    const initialState = {
        joke: '',
        categories: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(ChuckReducer, initialState);

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    // Get Categories
    const getCategories = async () => {
        const categories = await api.get('/categories');

        dispatch({
            type: GET_CHUCK_CATEGORIES,
            payload: categories.data,
        });
    };

    // Get Joke
    const getJoke = async (category) => {
        setLoading();

        const joke = category
            ? await api.get(`/random?category=${category}`)
            : await api.get('/random');

        dispatch({
            type: GET_CHUCK_JOKE,
            payload: joke.data,
        });
    };

    return (
        <ChuckContext.Provider
            value={{
                joke: state.joke,
                categories: state.categories,
                loading: state.loading,
                getCategories,
                getJoke,
            }}
        >
            {children}
        </ChuckContext.Provider>
    );
};

ChuckState.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ChuckState;

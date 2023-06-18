import axios from "axios";

const API_KEY = '70dd3cfa80de1915d6c85a48e09c15b1';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_MOVIES = 'trending/movie/day';
const SEARCH_MOVIE = 'search/movie';
const MOVIE = 'movie/';
const CREDITS = '/credits';
const REVIEWS = '/reviews';

const defaultParams = {
    api_key: API_KEY,
    language: 'en-US',
};

export const getTrendingMovies = async () => {
    const url = `${BASE_URL}${TRENDING_MOVIES}`;
    const options = {
        params: { ...defaultParams, page: 1 }
    };

    try {
        const response = await axios.get(url, options);
        return response.data.results;
    }
    catch (error) {
        console.log(error);
    }
};

export const searchMovieByQuery = async query => {
    const url = `${BASE_URL}${SEARCH_MOVIE}`;
    const options = {
        params: { ...defaultParams, page: 1, query }
    };

    try {
        const response = await axios.get(url, options);
        return response.data.results;
    }
    catch (error) {
        console.log(error);
    }
}

export const getMovieById = async movieId => {
    const url = `${BASE_URL}${MOVIE}${movieId}`;
    const options = {
        params: { ...defaultParams}
    };

    try {
        const response = await axios.get(url, options);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getMovieCastById = async movieId => {
    const url = `${BASE_URL}${MOVIE}${movieId}${CREDITS}`;
    const options = {
        params: { ...defaultParams}
    };

    try {
        const response = await axios.get(url, options);
        return response.data.cast;
    }
    catch (error) {
        console.log(error);
    }
}

export const getMovieReviewsById = async movieId => {
    const url = `${BASE_URL}${MOVIE}${movieId}${REVIEWS}`;
    const options = {
        params: { ...defaultParams, page: 1}
    };

    try {
        const response = await axios.get(url, options);
        return response.data.results;
    }
    catch (error) {
        console.log(error);
    }
}
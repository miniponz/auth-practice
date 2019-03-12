import loadHeader from './header-component.js';
import images from '../data/fake-gif-list.js';
import loadGifs from './load-gifs.js';
import writeSearchToQuery, { readFromQuery } from './hash-query.js';
import '../src/search-component.js';
import updateQ from '../src/search-component.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const q = window.location.hash.slice(1);
    const qOptions = readFromQuery(q);
    updateQ(qOptions.q);
});

const query = encodeURIComponent('pizza cat');
const API_KEY = '04JYUtl012K7M66v68lBD84XX77aXd1g';
const limit = '50';
const offset = '0';
const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=${limit}&offset=${offset}`;

fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log(response);
        loadGifs(response);
    }) 
import loadHeader from './header-component.js';
import images from '../data/fake-gif-list.js';
import loadGifs from './load-gifs.js';

loadHeader();


loadGifs(images);

const query = encodeURIComponent('pizza cat');
const API_KEY = '04JYUtl012K7M66v68lBD84XX77aXd1g';
const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`;

fetch(url)
    .then(res => res.json())
    .then(response => loadGifs(response))
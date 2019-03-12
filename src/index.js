import loadHeader from './header-component.js';
import images from '../data/fake-gif-list.js';
import loadGifs from './load-gifs.js';
import writeSearchToQuery, { readFromQuery } from './hash-query.js';
import '../src/search-component.js';
import updateQ from '../src/search-component.js';
import makeSearchUrl from './make-url.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const q = window.location.hash.slice(1);
    const qOptions = readFromQuery(q);
    updateQ(qOptions.q);

    
});

const url = 'https://api.giphy.com/v1/gifs/search?q=pizza+dog&api_key=Bsk1EF0sEaI9IRg4FCvAot870BsnEZpS';

    fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            loadGifs(response);
        }) 

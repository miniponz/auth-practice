import loadHeader from './header-component.js';
import loadGifs from './load-gifs.js';
import writeSearchToQuery, { readFromQuery } from './hash-query.js';
import './search-component.js';
import updateQ from './search-component.js';
import makeSearchUrl from './make-url.js';
import { auth } from './firebase.js';
import makeGifList from './make-gif-list.js';

loadHeader();

window.addEventListener('hashchange', loadQuery);

auth.onAuthStateChanged(() => {
    loadQuery();
});

function loadQuery() {
    const q = window.location.hash.slice(1);
    const qOptions = readFromQuery(q);
    updateQ(qOptions.q);
    const url = makeSearchUrl(qOptions);
    fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            loadGifs(response, makeGifList);
        });
}


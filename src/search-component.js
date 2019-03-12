import writeSearchToQuery from '../src/hash-query.js';

const searchForm = document.getElementById('search-form');
const qInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const q = qInput.value;
    const existingQ = window.location.hash.slice(1);
    const newQ = writeSearchToQuery(existingQ, q);
    window.location.hash = newQ;
});

export default function updateQ(q) {
    qInput.value = q;
}
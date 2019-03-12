const search_url = 'http://api.giphy.com/v1/gifs/search';
const api_key = 'Bsk1EF0sEaI9IRg4FCvAot870BsnEZpS';


export default function makeSearchUrl(qOptions) {
    const url = new URL(search_url);
    url.searchParams.set('q', qOptions.q);
    url.searchParams.set('api_key', api_key);
    return url.toString();
}
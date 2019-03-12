const search_url = 'http://api.giphy.com/v1/gifs/search';
const api_key = '4JYUtl012K7M66v68lBD84XX77aXd1g';

export default function makeSearchUrl(qOptions) {
    const url = new URL(search_url);
    url.searchParams.set('q', qOptions.q);
    url.searchParams.set('api_key', api_key);
    return url.toString();
}
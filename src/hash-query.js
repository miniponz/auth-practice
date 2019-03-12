export default function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('api_key', 'Bsk1EF0sEaI9IRg4FCvAot870BsnEZpS');
    return searchParams.toString();
}

export function readFromQuery(q) {
    const searchParams = new URLSearchParams(q);
    const queryOptions = {
        q: searchParams.get('q')
    }
    return queryOptions;
}
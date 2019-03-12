export default function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('api_key', '4JYUtl012K7M66v68lBD84XX77aXd1g');
    return searchParams.toString();
}

export function readFromQuery(q) {
    const searchParams = new URLSearchParams(q);
    const queryOptions = {
        q: searchParams.get('q')
    }
    return queryOptions;
}
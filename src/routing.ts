import Alpine from 'alpinejs'

const query : string | null = new URLSearchParams(location.search).get('page');

Alpine.data('router', () => ({
    query : (query==null) ? [] : query.split('.')
}))
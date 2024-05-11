import Alpine from 'alpinejs'

const query : string | null = location.hash;

Alpine.data('router', () => ({
    hash : (query=='') ? [] : query.split('.')
}))
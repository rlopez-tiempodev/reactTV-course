import 'es6-promise';
import 'whatwg-fetch';

const apiKey = '9b59823f9494d3bceb5ce675017a24a6';
// const baseImageURL = 'http://image.tmdb.org/t/p/{}{}';

export const imageSizes = {
    'small': 'w500',
    'large':'w1280',
    'xlarge':'w1920'
};

function generate_url(path) {
    return `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&language=en&include_image_language=en,null`;
}

export function get(path) {
    const url = generate_url(path);
    return fetch(url)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log('parsed json', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
}

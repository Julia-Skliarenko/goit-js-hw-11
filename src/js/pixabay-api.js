const API_KEY = '43804338-e495c959d27dd2a0f1faf63f4';
const BASE_URL = 'https://pixabay.com/api/';


export function fetchPhotosByQuery(images) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: images,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    });

    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json()
    });
}

function fetchApi() {
    const url = '/status/adapter/contract';

    return fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export default fetchApi
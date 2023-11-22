

const getPeoplePromise = fetch => {
    return fetch('http://swapi.py4e.com/api/people')
        .then(response => response.json())
        .then(data => {

            return {
                count: data.count,
                results: data.results
            }
        })
}

const getPeople = async(fetch) => {
    const request = await fetch('http://swapi.py4e.com/api/people')
    const data = await request.json()

    return {
        count: data.count,
        results: data.results
    }
}


module.exports = {
    getPeople,
    getPeoplePromise
}
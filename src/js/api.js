const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b915c50445msh0cdf4b30cc612e0p12b840jsn35d03a7ec20d',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

async function getApi() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getApi()

const API_URL = `https://images-api.nasa.gov/`;

const API_URL_SEARCH = "https://images-api.nasa.gov/search?q=andromeda";

async function getJSONData(url) {
    // ## INICIO BLOQUE 3 ##
    debugger;
    const result = {};
    try {
        const response = await fetch(url);
        if (response.ok) {
            result.data = await response.json();
            result.status = "ok";
        } else {
            throw Error(response.statusText);
        }
    }
    catch (error) {
        result.status = 'error';
        result.data = error;
    }
    return result;
    // ## FIN BLOQUE 3 ##
}

function getNasa(search) {
    return getJSONData(`${API_URL_SEARCH}&query=${search}`);
}
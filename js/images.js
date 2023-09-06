function showNasa(nasa) {
    // ## INICIO BLOQUE 4 ##
    debugger;
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let nasa of nasa) {
        container.innerHTML += getCardHTML(movie.poster_path, movie.title)
    }
    // ## FIN BLOQUE 4 ##
}

async function submitSearchEvent(e) {
    // ## INICIO BLOQUE 2 ##
    debugger;
    e.preventDefault();
    const response = await getNasa(document.getElementById("txtSearch").value);
    if (response.status === "ok") {
        showNasa(response.data.results);
    } else {
        alert("OCURRIÓ UN ERROR");
    }
    // ## FIN BLOQUE 2 ##
}


window.addEventListener("load", function () {
    // ## INICIO BLOQUE 1 ##
    debugger;
    const formSearch = document.getElementById("formSearch");
    formSearch.addEventListener("submit", submitSearchEvent);
    // ## FIN BLOQUE 1 ##
});
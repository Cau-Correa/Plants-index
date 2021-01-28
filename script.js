    const fetch = require('node-fetch');

    (async () => {
    const response = await fetch('https://trefle.io/api/v1/plants?token=ZWEVXNJFwXLOVFaAzlGwesIAAC8Y-F6dRuQ1M1cUo8Q');
    const json = await response.json();
    console.log(json);
})();

function fetchTrefleInformation(event){
    var plantname = $("#plant-name").val();
    if (!plantname){
        $("#tf-plant-data").html(`<h3>Please enter a plant name</h3>`);
        return;
    }
        $("#tf-plant-data").html(
            `<div id="loader">
            <img src="assets/loader.gif" alt="loading..." />
        </div>`);


$.when(
    $.getJSON('https://trefle.io/api/v1/plants?token=ZWEVXNJFwXLOVFaAzlGwesIAAC8Y-F6dRuQ1M1cUo8Q/${plantname}')
).then(
    function(response) {
        var plantData = response;
        $(`#tf-plant-data`).html(plantInformationHTML(plantData));
    }, function(errorResponse) {
        if (errorResponse.status === 404) {
            $(`#tf-plant-data`).html(
                `<h3>No info found for plant ${plantname}</h3>`)
        } else {
            console.log(errorResponse);
            $(`#tf-plant-data`).html(
                `<h3>Error:${errorResponse.responseJSON.message}</h3>`);
        }
    });
}

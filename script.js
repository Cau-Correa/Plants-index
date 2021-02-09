//Rendering Trefle data
function plantInformationHTML(plants) {
  return `
        <h2>${plants.name}
            <span>
                (<a href="${plants.html_url}" target="_blank">${plants}</a>)
            </span>
        </h2>`;
}

// Initial settup of data retrieval
function fetchTrefleInformation(event) {
  var plantname = $("#plant-name").val();
  if (!plantname) {
    $("#tf-plants-data").html(`<h3>Please enter a plant name</h3>`);
    return;
  }
  $("#tf-plants-data").html(
    `<div id="loader">
            <img src="assets/loader.gif" alt="loading..." />
        </div>`);

// JQuery promisses to retrieve information from the API
  $.when(
    $.getJSON('https://trefle.io/api/v1/plants?token=ZWEVXNJFwXLOVFaAzlGwesIAAC8Y-F6dRuQ1M1cUo8Q&page=2/${plantname}')
  ).then(
    function(response) {
      var plantData = response;
      $(`#tf-plants-data`).html(plantInformationHTML(plantData));
    },
    function(errorResponse) {
      if (errorResponse.status === 404) {
        $(`#tf-plants-data`).html(
          `<h3>No info found for plant ${plantname}</h3>`)
      } else {
        console.log(errorResponse);
        $(`#tf-plant-data`).html(
          `<h3>Error:${errorResponse.responseJSON.message}</h3>`);
      }
    });
}
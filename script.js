const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=ZWEVXNJFwXLOVFaAzlGwesIAAC8Y-F6dRuQ1M1cUo8Q');
  const json = await response.json();
  console.log(json);
})();

function fetchTrefleInformation(event){
    var plantname = $("#plant-name").val();
    if (!plantname){
        $("#tf-plantname").html(`<h3>Please enter a plant name</h3>`);
        return;
    }
        $("#tf-plantname").html(
            `<div id="loader">
            <img src="assets/loader.gif" alt="loading..." />
        </div>`);
}
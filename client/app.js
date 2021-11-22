function onPageLoad() {
    console.log("loading document")
    // var url = "http://127.0.0.1:5000/get_location_names"; Use this if NOT using nginx
    var url = "/api/get_location_names"; // Use this if using nginx
    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;


function getBathValue() {
    var uiBath = document.getElementsByName("uiBath");
    for(var i in uiBath) {
        if(uiBath[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1;
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
        if(uiBHK[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1;
}

function onClickedEstimatePrice() {
    console.log("Estimate Price Button Clicked");
    var location = document.getElementById("uiLocations");
    var sqft = document.getElementById("uiSqft");
    var bath = getBathValue();
    var bhk = getBHKValue();

    var estPrice = document.getElementById("uiEstimatedPrice");

    // var url = "http://127.0.0.1:5000/predict_home_price"; Use this if NOT using nginx
    var url = "/api/predict_home_price"; // Use this if using nginx

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bath,
        location: location.value
    },function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh<h2>";
        console.log(status);
    });
}




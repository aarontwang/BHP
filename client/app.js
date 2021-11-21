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
    location = document.getElementsByName("uiLocations");
    sqft = document.getElementsByName("uiSquareft");
    bath = getBathValue();
    bhk = getBHKValue();
    var url = "http://127.0.0.1:5000/get_estimated_price";
    $.get(url, function(data, status) {
        
    });
}

function onPageLoad() {
    console.log("loading document")
    var url = "http://127.0.0.1:5000/get_location_names";
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


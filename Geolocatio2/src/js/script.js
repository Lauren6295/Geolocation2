//* ************* Coordinates ********************************

const x = document.getElementById('texto');

function prueba() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    x.innerHTML = 'Latitude: ' + position.coords.latitude + 
    '<br>Longitude: ' + position.coords.longitude;
}

const coordinates = document.getElementById('coordinates');
coordinates.addEventListener('click', prueba);

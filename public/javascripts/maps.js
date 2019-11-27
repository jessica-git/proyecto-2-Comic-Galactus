function initMap() {

  const directionsService = new google.maps.DirectionsService
  const directionsDisplay = new google.maps.DirectionsRenderer

  const myMap = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 7,
      center: directions[0].cords,
      styles: mapStyles.retro
    }
  )

  const directionRequest = {
    origin: 'Warner Madrid',
    destination: 'Razzmatazz',
    travelMode: 'DRIVING'
  }

  directionsService.route(
    directionRequest,
    function (response, status) {
      if (status === 'OK') {
        console.log('La respuesta del directionService es', response)
        directionsDisplay.setDirections(response)
      } else {
        console.log('Directions request failed due to ' + status);
      }
    }
  )

  directionsDisplay.setMap(myMap)
}
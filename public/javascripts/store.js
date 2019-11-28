function getAllPlacesFromTheAPI(myMap) {
  axios
    .get("/store/api")
    .then(response => {
      //comprobar

      placeLocation(response.data.shop, myMap);
    })
    .catch(error => console.log(error));
}

function placeLocation(place, myMap) {
  // console.log(place);
  place.forEach(elm => {
    console.log(elm.cords.coordinates);
    const center = {
      lat: elm.cords.coordinates[0],
      lng: elm.cords.coordinates[1]
    };

    var infowindow = new google.maps.InfoWindow({
      content: `<p>${elm.name} <strong> Phone:</strong> ${elm.phone} <strong>Description:</strong> ${elm.description} <strong>schedule:</strong> ${elm.schedule} <strong>rate:</strong>${elm.rate} </p>`
    });

    console.log(center, "yujuuuuuuuuu");
    var marker = new google.maps.Marker({
      position: center,
      map: myMap,
      title: elm.name
    });

    marker.addListener("click", function() {
      infowindow.open(myMap, marker);
    });
  });
}

function initMap() {
  const myMap = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: {
      lat: 40.422718,
      lng: -3.707217
    }
  });

  getAllPlacesFromTheAPI(myMap);
}

// shops.forEach(
//   elm =>
//     new google.maps.Marker({
//       position: elm.cords,
//       map: myMap,
//       title: elm.name
//     })
// );

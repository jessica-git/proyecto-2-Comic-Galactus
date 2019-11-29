// import

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
      content: `<p><span style="font-family:'Calistoga';color:#c95c42; font-size:20px">${elm.name}</span><br> <span style="font-family:'Calistoga';color:#d6a22f"><strong> Phone:</strong></span> <span style="font-family:'Alegreya Sans';color:#a0a09f">${elm.phone}</span> <br><span style="font-family:'Calistoga';color:#d6a22f"><strong>Description:</strong></span> <span style="font-family:'Alegreya Sans';color:#a0a09f">${elm.description}</span> <br><span style="font-family:'Calistoga';color:#d6a22f"><strong>Schedule:</strong></span> <span style="font-family:'Alegreya Sans';color:#a0a09f">${elm.schedule}</span> <br><span style="font-family:'Calistoga';color:#d6a22f"><strong>Rate:</strong></span><span style="font-family:'Alegreya Sans';color:#a0a09f">${elm.rate}</span> </p>`
    });
    const icon = {
      url: "../images/icono-map.png",
      scaledSize: new google.maps.Size(40, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    console.log(center, "yujuuuuuuuuu");
    var marker = new google.maps.Marker({
      position: center,
      map: myMap,
      title: elm.name,
      icon: icon
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
    },
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#523735"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9b2a6"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#dcd2be"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ae9e90"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#93817c"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#6ea6c1"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#41a2c2"
          }
        ]
      },
      {
        featureType: "poi.school",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffeb3b"
          },
          {
            visibility: "off"
          },
          {
            weight: 1
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#f4f0d9"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#f8c967"
          },
          {
            weight: 0.5
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e9bc62"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#e98d58"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#db8555"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ce8e36"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#0088a9"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#87b3c7"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#de4e30"
          }
        ]
      }
    ]
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

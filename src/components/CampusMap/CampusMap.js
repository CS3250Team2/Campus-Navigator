import React, { Component } from 'react';

class CampusMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: 'AIzaSyDXCGRAllicDt6M1dAtjjM6qG8dvtH1QuA',
      map: null,
      origin: "colfax at auraria light rail, denver, CO",
      destination: "tivoli, metro state, CO",
      waypoints: [
        {
            location: "Aerospace and Enginering Sci. 220, metro state, CO'"
        },
        {
            location:"the kings center, metro state, CO"
        }
      ],

      directionsService: null,
      directionsDisplay: null,
      directionsDisplay2: null,

      mapStyle: {
        width: '600px',
        height: '500px'
      }
    };
  }

  // transitMode() {
  //   if (button1 === "1") {
  //     if (button2 === "1") {
  //       tmode1 = "DRIVING"
  //       tmode2 = "TRANSIT"
  //       tmode3 = "WALKING"
  //     }
  //     else {
  //       tmode1 = "TRANSIT"
  //       tmode2 = "TRANSIT"
  //       tmode3 = "WALKING"
  //     }
  //   }
  //   else {
  //     if (button2 === "1") {
  //       tmode1 = "DRIVING"
  //       tmode2 = "DRIVING"
  //       tmode3 = "WALKING"
  //     }
  //     else {
  //       tmode1 = "WALKING"
  //       tmode2 = "WALKING"
  //       tmode3 = "WALKING"
  //     }
  //   }
  // }

  componentDidMount() {
    window.initMap = this.initMap.bind(this);

    loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&callback=initMap`);
  }

  initMap() {
    var map = new window.google.maps.Map(window.document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    var directionsService = new window.google.maps.DirectionsService();
    var directionsDisplay = new window.google.maps.DirectionsRenderer();
    var directionsDisplay2 = new window.google.maps.DirectionsRenderer();

    var infowindow;
    infowindow = new window.google.maps.InfoWindow();

    directionsDisplay.setMap(map);
    directionsDisplay2.setMap(map);


    var request = {
      origin: this.state.origin,
      destination: this.state.destination,
      waypoints: this.state.waypoints,
      travelMode: 'WALKING'
    };

    directionsService.route(request, function(result, status) {
      if(status === 'OK') {
        directionsDisplay.setDirections(result);
      }
    });

    var request2 = {
      origin: "10700 E Dartmouth Ave, 80014, Aurora, CO",
      destination: "7th street parking garage, denver, CO",
      waypoints: [
        {
            location: "Dayton Light Rail Station metro state, CO'"
        },
      ],
      travelMode: 'DRIVING'
    };

    directionsService.route(request2, function(result, status) {
      if(status === 'OK') {
        directionsDisplay2.setDirections(result);
      }
    });

    this.setState({
      map: map,
      directionsService: directionsService,
      directionsDisplay: directionsDisplay,
      directionsDisplay2: directionsDisplay2,
    });

}
  // window.google.maps.event.addDomListener(window, 'load', listenerload=()=> {initialize(1.299845,103.856292);});

  render() {
    return (
      <div id="map" style={this.state.mapStyle}>This should be a map</div>
    );
  }
}

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

export default CampusMap;

import React, { Component } from 'react';
import classes from './CampusMap.css';
let api = process.env.REACT_APP_GOOGLE_API;
class CampusMapOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: api,
      map: null,
      directionsService: null,
      directionsDisplay: null,
      directionsDisplay2: null,
      directionsDisplay3: null,

      mapStyle: {
        width: '',
        height: '500px'
      }
    };
  }
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
    var directionsDisplay3 = new window.google.maps.DirectionsRenderer();

    var infowindow;
    infowindow = new window.google.maps.InfoWindow();

    directionsDisplay.setMap(map);
    directionsDisplay2.setMap(map);
    directionsDisplay3.setMap(map);


    // var request = {
    //   origin: "7th street garage,metro state, CO",
    //   destination: "Aerospace and Engineering sci 220,metro state, CO",
    //   travelMode: 'WALKING'
    // };
    //
    // directionsService.route(request, function(result, status) {
    //   if(status === 'OK') {
    //     directionsDisplay.setDirections(result);
    //   }
    // });

    var request2 = {
      origin: "10700 E Dartmouth Ave, 80014, Aurora, CO",
      destination: "7th street parking garage, denver, CO",
      travelMode: 'DRIVING'
    };
    if(request2!=null){
      directionsService.route(request2, function(result, status) {
        if(status === 'OK') {
          directionsDisplay2.setDirections(result);
        }
      });
    }
    var request3 = {
      origin: "7th street parking garage, denver, CO",
      destination: "Auraria Library,metro state, CO",
      travelMode: 'WALKING'
    };
    if(request3!=null){
      directionsService.route(request3, function(result, status) {
        if(status === 'OK') {
          directionsDisplay3.setDirections(result);
        }
      });
    }


    this.setState({
      map: map,
      directionsService: directionsService,
      directionsDisplay: directionsDisplay,
      directionsDisplay2: directionsDisplay2,
      directionsDisplay3: directionsDisplay3,
    });

}
  // window.google.maps.event.addDomListener(window, 'load', listenerload=()=> {initialize(1.299845,103.856292);});

  render() {
    return (
      <div id="map" className={classes.map} style={this.state.mapStyle}>This should be a map</div>
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

export default CampusMapOld;

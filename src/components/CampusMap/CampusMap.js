import React, { Component } from 'react';
import classes from './CampusMap.css'
import { withFirebase } from '../../Firebase';
let schedule = this.props.firebase.user.child('schedule');
let building = schedule.building;


let api = process.env.REACT_APP_GOOGLE_API;
let request;
let request1;
class CampusMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: api,
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
        width: '',
        height: '500px'
      }
    };
  }
  componentDidMount() {
    window.initMap = this.initMap.bind(this);

    loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&callback=initMap`);
  }

  driveToCampus(){
    let request={
      origin:'',
      travelMode:'DRIVE',
      destination:"7th street parking garage, denver, CO",
    }
  }
  driveTransitToCampus(){
    let request={
      origin:'',
      travelMode:'DRIVE',
      destination:'',//this needs to be nearest lightrail through places API
    }
  }
  transitToCampus(){
    let request={
      origin:'',
      travelMode:'TRANSIT',
      destination:'Colfax at auraria',
    }
  }
  walkToCampus(){
    let request1={
      origin:'',
      travelMode:'WALKING',
      waypoints:[
        {
            location: building[0]
        },
        {
            location:building[1]
        },
        {
            location:building[2]
        },
        {
            location:building[3]
        },
      ],
      destination: building[4],
    };
    }

  initMap() {
    var map = new window.google.maps.Map(window.document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8


    });
    let directionsService = new window.google.maps.DirectionsService();
    let directionsService2 = new window.google.maps.DirectionsService();
    let directionsDisplay = new window.google.maps.DirectionsRenderer();
    let directionsDisplay2 = new window.google.maps.DirectionsRenderer();


      directionsService.route(request, function(result, status) {
        if(status === 'OK') {
          directionsDisplay.setDirections(result);
        }
      });
      directionsService2.route(request1, function(result, status) {
        if(status === 'OK') {
          directionsDisplay2.setDirections(result);
        }
      });
      directionsDisplay.setMap(map);
      directionsDisplay2.setMap(map);
      this.setState({
        map: map,
        directionsService: directionsService,
        directionsDisplay: directionsDisplay,
        directionsDisplay2: directionsDisplay2,
      });
    }

    // var directionsDisplay2 = new window.google.maps.DirectionsRenderer();
    //
    // directionsDisplay.setMap(map);
    // directionsDisplay2.setMap(map);
    // directionsService.route(request1, function(result, status) {
    //   if(status === 'OK') {
    //     directionsDisplay.setDirections(result);
    //   }
    // });
    //
    // directionsService.route(request1, function(result, status) {
    //   if(status === 'OK') {
    //     directionsDisplay2.setDirections(result);
    //   }
    // });
    //
    // this.setState({
    //   map: map,
    //   directionsService: directionsService,
    //   directionsDisplay: directionsDisplay,
    //   directionsDisplay2: directionsDisplay2,
    // });
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
  // window.google.maps.event.addDomListener(window, 'load', listenerload=()=> {initialize(1.299845,103.856292);});



export default withFirebase(CampusMap);

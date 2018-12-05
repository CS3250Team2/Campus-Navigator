import React, { Component } from 'react';
import classes from './CampusMap.css';
import { withFirebase } from '../../Firebase';
// let schedule = this.props.firebase.user.child('schedule');
// let building = schedule.building;
let building=['Aerospace and Enginering Sci. 220',
 'Aerospace and Enginering Sci. 210',
 'Aerospace and Enginering Sci. 220',
 'Plaza Building M206'];

let api = process.env.REACT_APP_GOOGLE_API;
let request;
let request1;
let request3;
let map;

class CampusMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: api,
      map: null,
      service:null,
      infowindow:null,
      place:null,
      request:null,
      request1:null,
      request2:null,
      request3:null,
      directionsService: null,
      directionsDisplay: null,
      directionsDisplay2: null,
      directionsDisplay3:null,

      mapStyle: {
        width: '',
        height: '500px'
      }
    };
  }


  // driveToCampus=()=>{
  //   let request={
  //     origin:'',
  //     travelMode:'DRIVE',
  //     destination:"7th street parking garage, denver, CO",
  //   }
  //   this.walkToCampus();
  // }
  //
  // driveTransitToCampus=()=>{
  //
  //   let request2 = {
  //   query: 'Nearest lightrail',
  //   fields: ['rail'],
  //   };
  //
  //   let service = new window.google.maps.places.PlacesService(map);
  //   service.findPlaceFromQuery(request, callback);
  //
  //   this.setState({
  //     service:service,
  //   });
  //
  //   let request={
  //     origin:'',
  //     travelMode:'DRIVE',
  //     destination:this.state.place[0],//this needs to be nearest lightrail through places API
  //   };
  //   let request3={
  //     origin:this.state.place[0],
  //     travelMode:'RAIL',
  //     destination:'Colfax at auraria',
  //   }
  //   this.walkToCampus();
  // }
  // transitToCampus=()=>{
  //   let request={
  //     origin:'',
  //     travelMode:'TRANSIT',
  //     destination:'Colfax at auraria',
  //   };
  //   this.walkToCampus();
  // }
  // walkToCampus=()=>{
  //   let request1={
  //     origin:'',
  //     travelMode:'WALKING',
  //     waypoints:[
  //       {
  //           location: building[0]
  //       },
  //       {
  //           location:building[1]
  //       },
  //       {
  //           location:building[2]
  //       },
  //       {
  //           location:building[3]
  //       },
  //     ],
  //     destination: building[4],
  //   };
  //   }

  initMap() {
    var map = new window.google.maps.Map(window.document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8


    });
    let directionsService = new window.google.maps.DirectionsService();
    let directionsDisplay = new window.google.maps.DirectionsRenderer();
    let directionsDisplay2 = new window.google.maps.DirectionsRenderer();
    let directionsService3 = new window.google.maps.DirectionsService();
    let directionsDisplay3 = new window.google.maps.DirectionsRenderer();

    if(request1!=null){
      directionsService.route(request, function(result, status) {
          if(status === 'OK') {
            directionsDisplay.setDirections(result);
          }
        });
    }
      directionsService.route(request1, function(result, status) {
        if(status === 'OK') {
          directionsDisplay2.setDirections(result);
        }
      });
      if(request3!=null){
        directionsService.route(request3, function(result, status) {
          if(status === 'OK') {
            directionsDisplay3.setDirections(result);
          }
        });
      }

      directionsDisplay.setMap(map);
      directionsDisplay2.setMap(map);
      directionsDisplay3.setMap(map);
      this.setState({
        map: map,
        directionsService: directionsService,
        directionsDisplay: directionsDisplay,
        directionsDisplay2: directionsDisplay2,
        directionsDisplay3:directionsDisplay3,
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
    componentDidMount() {
      window.initMap = this.initMap.bind(this);

      loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&callback=initMap`);
      loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&libraries=places`);
    }
    render() {
      return (
        <div className={classes.map}>
          <button onClick={this.walkToCampus}>Click here if you live nearby and want to walk.</button>
          <button onClick={this.driveToCampus}>Click here if you want to drive downtown and park.</button>
          <button onClick={this.driveTransitToCampus}>Click here if you want to drive downtown and park.</button>
          <button onClick={this.walkToCampus}>Click here if you want to drive downtown and park.</button>


        <div id="map"  style={this.state.mapStyle}>This should be a map</div>
        </div>
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
function callback(results, status) {
  if (status == window.google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      this.setState({
        place:results[i],
      });
    }
  }
}

  // window.google.maps.event.addDomListener(window, 'load', listenerload=()=> {initialize(1.299845,103.856292);});



export default withFirebase(CampusMap);

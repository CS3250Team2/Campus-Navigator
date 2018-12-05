import React, { Component } from 'react';
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
let request2;
let request3;
let map;

class CampusMap extends Component {
  constructor(props) {
    super(props);
    request=props.request;
    request1=props.request1;
    request2=props.request2;
    request3=props.request3;
    console.log(request3);
    this.state = {
      apiKey: api,
      map: null,
      service:null,
      infowindow:null,
      place:null,
      request:props.request,
      request1:props.request1,
      request2:props.request2,
      request3:props.request3,
      directionsService: null,
      directionsDisplay: null,
      directionsDisplay2: null,
      directionsDisplay3:null,

      mapStyle: {
        width: '',
        height: '300px'
      }
    };
  }

  componentDidMount() {
    window.initMap = this.initMap.bind(this);

    loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&callback=initMap`);
    loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&libraries=places`);
  }


  initMap() {
    var map = new window.google.maps.Map(window.document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8


    });
    let directionsService = new window.google.maps.DirectionsService();
    let directionsDisplay = new window.google.maps.DirectionsRenderer();
    let directionsDisplay2 = new window.google.maps.DirectionsRenderer();
    let directionsDisplay3 = new window.google.maps.DirectionsRenderer();

    var infowindow;
    infowindow = new window.google.maps.InfoWindow();

    directionsDisplay.setMap(map);
    directionsDisplay2.setMap(map);
    directionsDisplay3.setMap(map);
    if(this.request2!=null){
      let service = new window.google.maps.places.PlacesService(map);
      service.findPlaceFromQuery(request2, callback);
      this.walkToCampus();
      this.setState({
        service:service,
      });
      request={
        origin:'10782 Huntwick St, 80130,Highlands Ranch, CO',
        travelMode:'DRIVE',
        destination:this.state.place[0],//this needs to be nearest lightrail through places API
      };
      request3={
        origin:this.state.place[0],
        travelMode:'RAIL',
        destination:'Colfax at auraria',
      }
    }


    if(this.request!=null){
      directionsService.route(this.request, function(result, status) {
          if(status === 'OK') {
            directionsDisplay.setDirections(result);
          }
        });
    }
      directionsService.route(this.request1, function(result, status) {
        if(status === 'OK') {
          directionsDisplay2.setDirections(result);
        }
      });
      if(this.request3!=null){
        directionsService.route(this.request3, function(result, status) {
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
        directionsDisplay3:directionsDisplay3,
      });
      window.google.maps.event.addDomListener(window, 'resize', function() {
        window.google.maps.event.trigger(this.map, 'resize');
      });

      //Preserve map perspective when after resize
      window.google.maps.event.addListener(this.map, 'resize', function() {
        var center = this.map.getCenter();
        window.google.maps.event.addListenerOnce(this.map, 'center_changed', function() {
          this.map.setCenter(center);
        });
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
        <div id="map"  style={this.state.mapStyle}>This should be a map</div>
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
  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      this.setState({
        place:results[i],
      });
    }
  }
}

  // window.google.maps.event.addDomListener(window, 'load', listenerload=()=> {initialize(1.299845,103.856292);});



export default CampusMap;

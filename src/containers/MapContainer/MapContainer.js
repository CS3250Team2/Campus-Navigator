import CampusMapOld from './components/CampusMap/CampusMapOld';
import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
let api = process.env.REACT_APP_GOOGLE_API;
class MapContainer extends React.Component{
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
  componentDidMount() {
    window.initMap = this.initMap.bind(this);

    loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&callback=initMap`);
  }
  driveToCampus=()=>{
    let request={
      origin:'',
      travelMode:'DRIVE',
      destination:"7th street parking garage, denver, CO",
    }
    this.walkToCampus;   

  }

  driveTransitToCampus=()=>{

    let request2 = {
    query: 'Nearest lightrail',
    fields: ['rail'],
    };

    let service = new window.google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, callback);

    this.setState({
      service:service,
    });

    let request={
      origin:'',
      travelMode:'DRIVE',
      destination:this.state.place[0],//this needs to be nearest lightrail through places API
    };
    let request3={
      origin:this.state.place[0],
      travelMode:'RAIL',
      destination:'Colfax at auraria',
    }
    this.walkToCampus;
  }
  transitToCampus=()=>{
    let request={
      origin:'',
      travelMode:'TRANSIT',
      destination:'Colfax at auraria',
    };
    this.walkToCampus();
  }
  walkToCampus=()=>{
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
  render(){
    return(
      <div>
      <button onClick={this.walkToCampus}>Click here if you live nearby and want to walk.</button>
      <button onClick={this.driveToCampus}>Click here if you want to drive downtown and park.</button>
      <button onClick={this.driveTransitToCampus}>Click here if you want to drive downtown and park.</button>
      <button onClick={this.walkToCampus}>Click here if you want to drive downtown and park.</button>
      </div>
    );
  }
}

import CampusMapOld from '../../components/CampusMap/CampusMapOld';
import CampusMap from'../../components/CampusMap/CampusMap';
import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../../registerServiceWorker';
import Content from '../Content/Content';
import classes from './MapContainer.css'
let api = process.env.REACT_APP_GOOGLE_API;
let request;
let request1;
let request2;
let request3;
let building=['Aerospace and Enginering Sci. 220',
 'Aerospace and Enginering Sci. 210',
 'Aerospace and Enginering Sci. 220',
 'Plaza Building M206'];
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
    };
  }
  driveToCampus=()=>{
    let request={
      origin:'10782 Huntwick St, 80130,Highlands Ranch, CO',
      travelMode:'DRIVE',
      destination:"7th street parking garage, denver, CO",
    }
    this.walkToCampus();
    this.setState({
      request:request,
      request1:request1,
    });
    ReactDOM.render(
      <CampusMap
        request={this.request}
        request1={this.request1}
        request2={this.request2}
        request3={this.request4
      }/>,
      document.getElementById('mapCont')
    );
    //here is where we would render the CampusMap
  }

  driveTransitToCampus=()=>{

    let request2 = {
    query: 'Nearest lightrail',
    fields: ['rail'],
    };
    this.walkToCampus();
    this.setState({
      request:request,
      request1:request1,
      request2:request2,
      request3:request3,
    });
    //here is where we would render the CampusMap
    ReactDOM.render(
      <CampusMap
        request={this.request}
        request1={this.request1}
        request2={this.request2}
        request3={this.request3
      }/>,
      document.getElementById('mapCont')
    );
  }
  transitToCampus=()=>{
    let request={
      origin:'10782 Huntwick St, 80130,Highlands Ranch, CO',
      travelMode:'TRANSIT',
      destination:'Colfax at auraria',
    };
    this.walkToCampus();
    this.setState({
      request:request,
      request1:request1,
    });
    ReactDOM.render(
      <CampusMap
        request={this.request}
        request1={this.request1}
        request2={this.request2}
        request3={this.request4
      }/>,
      document.getElementById('mapCont')
    );
    //here is where we would render the CampusMap
  }
  walkToCampus=()=>{
    let request1={
      origin:'10782 Huntwick St, 80130,Highlands Ranch, CO',
      travelMode:'WALKING',
      waypoints:[
        {
            location: '${building[0]},metro state,CO'
        },
        {
            location:'${building[1]},metro state,CO'
        },
        {
            location:'${building[2]},metro state,CO'
        },
        {
            location:'${building[3]},metro state,CO'
        },
      ],
      destination: '${building[4]},metro state,CO',
    };
    this.setState({
      request1:request1,
    });
    ReactDOM.render(
      <CampusMap
        request={this.request}
        request1={this.request1}
        request2={this.request2}
        request3={this.request4
      }/>,
      document.getElementById('mapCont')
    );
    //here is where we would render the CampusMap
  }
  render(){
    return(
      <div className={classes.side}>
        <Content>
          <button onClick={this.walkToCampus}>Click here if you live nearby and want to walk.</button>
          <button onClick={this.driveToCampus}>Click here if you want to drive downtown and park.</button>
          <button onClick={this.driveTransitToCampus}>Click here if you want to drive to a lightrail station take the lightrail then walk.</button>
          <button onClick={this.walkToCampus}>Click here if you can't drive and would like to use public transportation</button>
          <div id='mapCont'></div>
        </Content>
      </div>

    );
  }
}
export default MapContainer;

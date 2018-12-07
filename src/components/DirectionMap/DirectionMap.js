/*global google*/

import React from 'react';
import { DirectionsRenderer, GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';
import classes from './DirectionMap.css';

class DirectionMap extends React.Component {
    render() {
        const url1 = 'https://maps.googleapis.com/maps/api/js?key=';
        const url2 = `${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`;
        const url = url1 + url2;
        const buildings = this.props.buildings;

        const DirectionsComponent = compose(
            withProps({
                googleMapURL: url,
                loadingElement: <div style={{ height: `100%` }} />,
                containerElement: <div className={classes.Map} />,
                mapElement: <div style={{ height: `100%` }} />,
            }),
            withScriptjs,
            withGoogleMap,
            lifecycle({
                componentDidMount() {
                    const DirectionsService = new google.maps.DirectionsService();
                    let startPoint = '';
                    let endPoint = '';
                    let request = {};
                    let ways = [];

                    if (buildings.length > 0) {
                        startPoint = `${buildings[0]}, Auraria, CO, USA`;
                        endPoint = `${buildings[buildings.length - 1]}, Auraria, CO, USA`;
                    } else {
                        startPoint = new google.maps.LatLng(39.745, -105.006);
                        endPoint = startPoint;
                    }

                    request.origin = startPoint;
                    request.destination = endPoint;
                    request.travelMode = 'WALKING';

                    if (buildings.length > 2) {
                        for (let i = 1; i < buildings.length - 1; i++) {
                            ways.push({ location: `${buildings[i]}, Auraria, CO, USA` });
                        }
                    }

                    if (buildings.length === 0) {
                        request.origin = new google.maps.LatLng(39.745, -105.006);
                        request.destination = request.origin;
                    }

                    if (ways.length > 0) {
                        request.waypoints = ways;
                    }

                    DirectionsService.route(request, (res, status) => {
                        if (status === 'OK') {
                            this.setState({
                                directions: { ...res },
                                markers: true,
                            });
                        } else {
                            console.error(`Error fetching directions ${res}`);
                        }
                    });
                },
            })
        )(props => (
            <GoogleMap defaultZoom={12} defaultCenter={{ lat: 39.745, lng: -105.006 }}>
                {props.directions && (
                    <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers} />
                )}
            </GoogleMap>
        ));

        return <DirectionsComponent />;
    }
}

export default DirectionMap;

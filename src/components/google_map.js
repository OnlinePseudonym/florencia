import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import './google_map.css';

class GoogleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'AIzaSyC5bZISw7DpIBF2w1h8Y2IOybj5YWZG4VU',
            center: { lat: 33.3164068, lng: -112.0034161 },
            zoom: 13,
            text: 'FPB',
            mapOptions: {
                styles: [
                    {
                        "featureType": "all",
                        "stylers": [
                            {
                                "saturation": 0
                            },
                            {
                                "hue": "#e7ecf0"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "stylers": [
                            {
                                "saturation": -70
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "saturation": -60
                            }
                        ]
                    }
                ],
            },
        }
    }

    render() {
        return (
            <div className="map-wrapper">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: [this.state.apiKey] }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                    resetBoundsOnResize={true}
                    options={this.state.mapOptions}
                >
                    <Marker lat={this.state.center.lat} lng={this.state.center.lng} />
                </GoogleMapReact>
                <a href="https://www.google.com/maps/place/Florencia+Pizza+Bistro/@33.3164068,-112.0056048,17z/data=!3m1!4b1!4m5!3m4!1s0x872b04f76b425c19:0xed4e02dfbf55618a!8m2!3d33.3164068!4d-112.0034161" className="directions" target="_blank" rel="noopener noreferrer">GET DIRECTIONS</a>                
            </div>
        )
    }
}

export default GoogleMap;
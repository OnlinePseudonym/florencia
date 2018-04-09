import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'AIzaSyC5bZISw7DpIBF2w1h8Y2IOybj5YWZG4VU',
            center: { lat: 33.3164068, lng: -112.0034161 },
            zoom: 15,
            text: 'FPB',
            mapOptions: {
                styles: [
                    {
                        "featureType": "landscape",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "stylers": [
                            {
                                "hue": "#00aaff"
                            },
                            {
                                "saturation": -100
                            },
                            {
                                "gamma": 2.15
                            },
                            {
                                "lightness": 12
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 24
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 57
                            }
                        ]
                    }
                ],
            },
        }
    }

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: [this.state.apiKey] }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                resetBoundsOnResize={true}
                options={this.state.mapOptions}
            >
                <div
                    lat={this.state.center.lat}
                    lng={this.state.center.lng}
                >
                    <Marker />
                </div>
            </GoogleMapReact>
        )
    }
}

export default SimpleMap;
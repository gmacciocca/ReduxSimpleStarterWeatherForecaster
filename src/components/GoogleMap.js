import React from "react";

export default class GoggleMap extends React.Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon,
            }
        });
    }
    render() {
        return <div ref="map" />;
    }
}

// import { GoogleMapLoader, GoogleMap } from "react-google-maps";
// export default ({ lat, lon }) => {
//     return(
//         <GoogleMapLoader
//             containerElement={ <div style={{ height: "100%" }} /> }
//             googleMapElement={
//                 <GoogleMap defaultZoom={12} decaultCenter={{ lat, lng: lon }} />
//             }
//         />
//     );
// };
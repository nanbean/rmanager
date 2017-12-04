import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import marker from '../assets/marker.png';

const SearchMap = compose(
	withProps({
		googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCBclrtKQwief8ogceKMCa7bmkRkaNerqE&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: '100%' }} />,
		containerElement: <div style={{ height: '400px' }} />,
		mapElement: <div style={{ height: '100%' }} />
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={16}
		defaultCenter={{ lat: props.markerPositionLat, lng: props.markerPositionLng }}
	>
		<Marker
			draggable
			defaultIcon={marker}
			position={{ lat: props.markerPositionLat, lng: props.markerPositionLng }}
			onDragEnd={props.onMarkerDragEnd}
		/>
	</GoogleMap>
));

SearchMap.propTypes = {
	markerPositionLat: PropTypes.number.isRequired,
	markerPositionLng: PropTypes.number.isRequired
};

export default SearchMap;

import React from 'react';
import './asteroid-details.css'

class AsteroidDetailComponent extends React.Component {
    constructor(props) {
        super(props);

    }


    // Fetching the API and grabbing the JSON object
    componentDidMount() {

    }


    render() {
        let { asteroid } = this.props.location.state;
        var pontentialHazard = asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No";
        var maxDiameter = parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(2);
        var minDiameter = parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(2);
        var missingDistanceKm = parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(2);
        var missingDistanceLunar = parseFloat(asteroid.close_approach_data[0].miss_distance.lunar).toFixed(2);
        var relativeVelocityKMH = parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2);


        console.log(JSON.stringify(asteroid, null, 2));
        return (
            <div className='bodyDetails'>
                <div className='containerDetails'>
                    <h1>Name: {asteroid.name}</h1>
                    <h1>Is a potentially Hazard ? {pontentialHazard}</h1>
                    <h2>Closest approach date: {asteroid.close_approach_data[0].close_approach_date_full}</h2>
                    <h2>Estimated minimum diameter: {minDiameter}m</h2>
                    <h2>Estimated maximum diameter: {maxDiameter}m</h2>
                    <h2>Missing distance: {missingDistanceKm}km or {missingDistanceLunar} times the distance from moon</h2>
                    <h2>Relative speed: {relativeVelocityKMH}km/h</h2>
                </div>
            </div>
        );
    }
}

export default AsteroidDetailComponent;

import React from 'react';
import { Link } from 'react-router-dom';
import * as Global from '../../common/global-vars'
import './closest-asteroids.css'

class ClosestAsteroidsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Asteroids: {},
            Asteroid: []
        };
        this.handleAsteroid = this.handleAsteroid.bind(this);
    }
    

    // Fetching the API and grabbing the JSON object
    componentDidMount() {
        fetch(Global.closestAsteroidsPath)
            .then(res => res.json())
            .then(Asteroids => this.setState({ Asteroids }));
    }

    handleAsteroid(){
        if(JSON.stringify(this.state.Asteroids) === '{}'){
            return [];
        }
        else{
            var AsteroidsArray = this.state.Asteroids.near_earth_objects['2020-01-02'];
            return AsteroidsArray;
        }
    }


    // Rendering the list of objects to HTML
    render() {
        //console.log(`${JSON.stringify(this.state.Asteroids, null, 2)}`);
        var responseObject = this.handleAsteroid();
        console.log(`RESPONSE NASA RENDER: ${JSON.stringify(responseObject, null, 2)}`);
        return (
            <div className="bodyDiv">
            <h1></h1>
                {this.handleAsteroid().map(b =>
                    <div key={b.id} className='columnBodyCA'>
                        <Link to={{
                            pathname: '/asteroiddetails',
                            state: {asteroid: b}
                        }}>
                            <div className='columnBodyHome'>{b.name}</div>
                        </Link>
                    </div>
                )} 
            </div>
        );
    }
}

export default ClosestAsteroidsComponent;

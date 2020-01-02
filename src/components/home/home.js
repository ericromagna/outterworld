import React from 'react'
import { Link } from 'react-router-dom'
import * as Global from '../../common/global-vars'
import './home.css'
import AsteroidsList from '../closest-asteroids/closest-asteroids'
import moment from 'moment'


class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apod: {},
        }
    }

    componentDidMount() {

        fetch(`${Global.apodPath}${Global.apiKey}`)
            .then(res => res.json())
            .then(apod => this.setState({ apod }));
    }



    render() {
        var apodImage = "";
        if(this.state.apod != null &&  this.state.apod.hdurl != null){
            apodImage = this.state.apod != null ? this.state.apod.hdurl : '';
        }
        else if(this.state.apod != null){
            apodImage = this.state.apod.url;
        }

        var homeStyleMain = {
            backgroundImage : `url(${apodImage})`,
            height: `1080px`,
            width: `1920px`,
            position: `absolute`
        };

        console.log(`${apodImage}`);
        return (
            <div style={homeStyleMain} >
            <h1 className="homeTitle">Closest Asteroids to Earth on {moment().format('LLLL')}</h1>
                <AsteroidsList />
                {/* <img src={apodImage} alt='apodimage' className='imgDiv' /> */}

                {/* <Link to={{
                            pathname: '/asteroids',
                }}>Nearest Asteroids</Link> */}
            </div>
        );
    }

}

export default HomeComponent;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import HomeComponent from './components/home/home';
import ClosestAsteroidsComponent from './components/closest-asteroids/closest-asteroids';
import AsteroidDetailComponent from './components/asteroid-details/asteroid-details';
import GeomagneticComponent from './components/geomagnetic/geomagnetic';

ReactDOM.render(
    <BrowserRouter>
        <Route path={'/'} component={HomeComponent} exact />
        <Route path={'/asteroids'} component={ClosestAsteroidsComponent} exact/>
        <Route path={'/asteroiddetails'} component={AsteroidDetailComponent} />
        <Route path={'/geomagnetic'} component={GeomagneticComponent} />
    </BrowserRouter>

, document.getElementById('root'));


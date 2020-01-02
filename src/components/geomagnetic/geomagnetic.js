import React from 'react';
import * as Global from '../../common/global-vars'

class GeomagneticComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Georesponse: {}
        };
    }
    
    componentDidMount() {
        //PS: This Api only returns value for large amount of times (5 months before the current date is used in this case)
        //reducing this time might carry to empty response
        fetch(Global.geoMagneticStormPath)
            .then(res => res.json())
            .then(Georesponse => this.setState({ Georesponse }));
    }

    render() {
        console.log(`${JSON.stringify(this.state.Georesponse, null, 2)}`);
        return (
            <div>
            </div>
        );
    }
}

export default GeomagneticComponent;

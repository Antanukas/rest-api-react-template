import React from 'react';
import Axios from 'axios'

class RouteOne extends React.Component {
    constructor() {
        super();
        this.state = { greeting: 'Loading from api....'}
    }

    componentWillMount() {
        Axios.get('/api/helloworld').then(response => {
            this.setState({ greeting: response.data.greet });
        });
    }

    render() {
        return <div>{this.state.greeting}</div>
    }
}
export default RouteOne
import React, {Component} from 'react';
import axios from 'axios';
import Data from './Cities.json'
import Loading from './loading.gif';
import WeatherTable from './WeatherTable';

class WeatherForecast extends Component {

    constructor(props) {
        super(props);
        this.isLoading = false;
        this.isError = false;
        this.state = {
            isLoading : false,
            isError : false,
            forecasts : []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cityId === nextProps.cityId || nextProps.cityId === '') {
            return;
        }
        this.setState({
            isLoading : true,
            isError : false
        });
        this.cityName = Data[nextProps.cityId - 1].name;
        axios
            .get(`https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${this.cityName}")`)
            .then((response) => {
                const results = response.data.query.results;
                this.setState({
                    isLoading : false,
                    forecasts : results !== null ? results.channel.item.forecast : null,
                    isError : results !== null ? false : true
                });
            })
            .catch((error) => {
                console.log('Error: ' , error);
                this.setState({
                    isLoading : false,
                    isError : true
                });
            });

    }
    
    render() {
        return (
            this.props.cityId !== '' && 
            <div>
                <h2>forecast for {this.cityName}</h2>
                {this.state.isError && <h2>Error loading data</h2>}
                {this.state.isLoading && <img src={Loading} alt="weather icon" />}
                {!this.state.isError && <WeatherTable data={this.state.forecasts} />}
            </div>
        );
    }

}
export default WeatherForecast;
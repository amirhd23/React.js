import React, {Component} from 'react';
import './Table.css';
import WeatherIcon from './WeatherIcon';
class WeatherTable extends Component {
    
    convertToCelsius(tempFahrenheit) {
        return ((tempFahrenheit - 32) / 1.8).toFixed(1);
    }

    render() {
        return (
        <div class="table100 ver3">
            <table >
                <tr>
                    <th>Date</th>
                    <th>Icon</th>
                    <th>Forecast</th>
                    <th>Low</th>
                    <th>High</th>
                </tr>
                {this.props.data !== null && this.props.data.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.day}, {value.date}</td>
                            <td><WeatherIcon code={value.code} /></td>
                            <td>{value.text}</td>
                            <td>{this.convertToCelsius(value.low)}</td>
                            <td>{this.convertToCelsius(value.high)}</td>
                        </tr>);
                })}
            </table>
            <a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" alt="Yahoo! logo" width="134" height="29"/> </a>
        </div>
        );
    }
}
export default WeatherTable
import React, {Component} from 'react';
import Rainy from './img/rainy.png'
import Cloudy from './img/cloudy.png';
import PartlyCloudy from './img/partly-cloudy.png';
import FairDrizzle from './img/fair-drizzle.png';
import Windy from './img/wind.png';
import RainySnow from './img/rainy-snow.png';
import Sunny from './img/sunny.png';
import ThunderStorm from './img/thunder-storm.png';
import Snow from './img/snow.png';
import NotFound from './img/na.png';
class WeatherIcon extends Component {
    render() {
        switch (this.props.code) {//codes from https://developer.yahoo.com/weather/documentation.html#codes
            case "5"://rainy snow
                return (<img src={RainySnow} alt="rainy snow" />);
            case "11":case "12"://rainy
                return (<img src={Rainy} alt="rainy" />);
            case "14":
                return (<img src={Snow} alt="Snowy" />);
            case "23": case "24"://Breezy-Windy
                return (<img src={Windy} alt="windy" />);
            case "26":case "28"://mostly cloudy - cloudy
                return (<img src={Cloudy} alt="cloudy" />);
            case "30"://partly cloudy
                return (<img src={PartlyCloudy} alt="partly cloudy" />);
            case "34":case "32"://mostly sunny
                return (<img src={Sunny} alt="sunny" />);
            case "39"://scattered Showers
                return (<img src={FairDrizzle} alt="scattered showers" />);
            case "47"://scattered thunderstorm
                return (<img src={ThunderStorm} alt="scattered thunderstorm" />);
            default:
                return (<img src={NotFound} alt="not found" />);
        }
    }
}
export default WeatherIcon;
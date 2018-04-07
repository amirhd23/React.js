import React, {Component} from 'react';
import Data from './Cities.json';
import WeatherForecast from './WeatherForecast';
class WeahterForm extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
       const {name, value} = e.target;
       this.setState({
           [name] : value
       }); 
    }

    render() {
        return(
            <div>
                <form>
                    <select 
                        name="city" 
                        value={this.state.city}
                        onChange={this.handleChange}>
                        <option value="">Please select city</option>
                        {
                            Data.map((city) => {
                                return (
                                    <option 
                                        key={city.id} 
                                        value={city.id}>
                                    {city.name}
                                    </option>);
                            })
                        }
                    </select>
                </form>
                <WeatherForecast cityId={this.state.city} />
            </div>
        );
    }
}
export default WeahterForm;
import React from "react";
import { Weather } from "./Weather";

export class Search extends React.Component{
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(event) {
        event.preventDefault();
        fetch("/weather")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    weather: res.data
                })
            })
    }

    render() {
        return(
            <div>
                <div>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" onSubmit={(event) => this.getWeather(event)}/>
                    </form>
                </div>
                <Weather weather={this.state.weather}/>
            </div>
        )
    }
}


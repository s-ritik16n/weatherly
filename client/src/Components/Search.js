import React from "react";
import { Weather } from "./Weather";
import "../App.css";

export class Search extends React.Component{
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
        this.state =  {
            weather: null
        }
    }

    getWeather(event) {
        event.preventDefault();
        console.log("getWeather")
        fetch("http://localhost:3001/weather")
            .then(res => res.json())
            .then(res => {
                console.log(JSON.parse(res.data));
                this.setState({
                    weather: res.data
                })
            })
            .catch((err) => console.log(err))
    }

    render() {
        return(
            <div>
                <div>
                    <form className="flex flex-prop" onSubmit={(event) => this.getWeather(event)}>
                        <label>  
                            <input className="width-44 input-field border-8" placeholder="Enter the name of the city" type="text" name="name" />
                        </label>
                        <div className="submit-btn">
                            <button className="input-field" type="submit" value="Submit"> Submit</button>
                        </div>
                    </form>
                </div>
                <Weather weather={this.state.weather}/>
            </div>
        )
    }
}


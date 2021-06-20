import React from "react";
import { Weather } from "./Weather";
import "../App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export class Search extends React.Component{
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
        this.state =  {
            weather: null,
            notFound: false,
            msg: "",
            loading: false
        }
    }

    getWeather(event) {
        event.preventDefault();
        console.log(this.location.value);
        if(!this.location.value) {
            this.setState({
                msg: "Please enter a location",
                loading: false
            });
            return;
    
        }
        this.setState({
            loading: true,
            msg: ""
        })
        fetch("http://localhost:3001/weather/"+this.location.value)
            .then(res => res.json())
            .then(res => {
                if(res.success) {
                    let data = res.data;
                    console.log(data)
                    this.setState({
                        weather: data,
                        notFound: false,
                        msg: "",
                        loading: false
                    })
                } else {
                    this.setState({
                        notFound: true,
                        weather: null,
                        msg: "Oops! Weatherly doesn't identify the location you entered",
                        loading: false
                    })
                }
                
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    weather: null,
                    notFound: true,
                    msg: "Oops! Something broke. Please contact Admin",
                    loading: false
                })
            })
    }

    render() {
        return(
            <div>
                <div>
                    <form className="flex flex-prop justify-center" onSubmit={(event) => this.getWeather(event)}>
                        <label>  
                            <input className="width-44 input-field border-8 font-size" placeholder="Enter the name of the city" type="text" name="location" ref={(c) => this.location = c}/>
                        </label>
                        <div className="submit-btn">
                            <button className="input-field" type="submit" value="Submit"> Submit</button>
                        </div>
                    </form>
                </div>
                <Weather weather={this.state.weather} notFound={this.state.notFound} msg={this.state.msg}/>
                {this.state.loading && 
                (
                    <Loader
                        type="Circles"
                        color="#3c487d"
                        height={50}
                        width={50}
                        style={{marginTop: "16px"}}
                    />
                )}
            </div>
        )
    }
}


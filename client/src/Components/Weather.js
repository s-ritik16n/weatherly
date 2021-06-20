import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { WiDegrees } from "react-icons/wi";

export const Weather = (props) => {
    const weather = props.weather;
    const msg = props.msg;
    return(
        <div >
            {(weather && weather["cod"] === "200") && 
            <div className="flex-column font-size">
                <div className="margin-btm">
                    Temperature: {weather.list[0].main.temp} C   |   Feels like: {weather.list[0].main.feels_like} C
                </div>
                <div className="margin-btm">
                    {weather.list[0].main.temp_min} C <BsArrowDown/>  /  {weather.list[0].main.temp_max} C <BsArrowUp/>
                </div>
                <div className="margin-btm">
                    Humidity: {weather.list[0].main.humidity} %
                </div>
            </div>}
            {((weather && weather["cod"] !== "200") || props.notFound || msg) &&
                <div>
                    {msg}
                </div>
            }
        </div>
    )
}
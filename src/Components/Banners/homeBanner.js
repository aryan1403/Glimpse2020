import { Link } from "react-router-dom";
import "./homeBanner.css";

export default function HomeBanner(props) {
    return (
        <>
        <div id="homebannerdiv">
            <img id={"homebannerimg"+props.dir} alt="" src={props.src} />
            <h5 id="homebannerhead">Hello, Sunglasses Glimpse2020</h5>
            <p id={"homebannertxt"+props.dir}>Here you will get some premium sunglasses, sunglasses with different fashion and trends... etc to be changed in future Here you will get some premium sunglasses, sunglasses with different fashion and trends... etc to be changed in future Here you will get some premium sunglasses, sunglasses with different fashion and trends... etc to be changed in future</p>
            <Link to={props.url}><button id={"homebannerbtn"+props.dir}>Shop Now</button></Link> 
        </div>
        </>
    );
}
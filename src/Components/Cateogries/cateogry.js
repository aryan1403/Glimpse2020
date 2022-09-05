import "./cateogry.css";
import CateogryLabel from "./cateogryLabel";
import Mens from "./../../res/menscat.jpg";
import Womens from "./../../res/womencat.jpeg";
import Sunglasses from "./../../res/sunglassescat.jpg";

export default function Cateogry() {
    return (
        <>
        <div id="catdiv">
            <CateogryLabel src={Mens} url="/mens" label="Men's"/>
            <CateogryLabel src={Womens} url="/womens" label="Womens"/>
            <CateogryLabel src={Sunglasses} url="/casuals" label="Casuals"/>
        </div>
        </>
    );
}
import { Link } from "react-router-dom";
import "./cateogrylabel.css";

export default function CateogryLabel(props) {
    return (
        <>
        <div id="container">
        <img id="image" alt="" src={props.src} />
        <Link to={props.url} id="text">{props.label}</Link>
        </div>
        </>
    );
}
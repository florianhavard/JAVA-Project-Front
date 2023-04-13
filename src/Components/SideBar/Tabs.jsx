import { Link } from "react-router-dom/dist";


function Tabs(props) {
    console.log(props.to)
    return (
        <Link to={props.to} class="nav-link">
            {props.icon}
            <span>{props.value}</span>
        </Link>
    )
}
export default Tabs;
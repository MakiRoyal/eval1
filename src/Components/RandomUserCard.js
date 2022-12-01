
import { Link } from "react-router-dom"

export default function RandomUserCard(props) {

    const Content = () => {
        return (<div>
            <h1>{props.user.name.first} {props.user.name.last}</h1>
            <img src={props.user.picture.large} />
        </div>)
    }

    if (props.showLink === true) {

        return (<Link to="/randomuser/detail" state={{ user: props.user }} >
            <Content />
        </Link>)

    } else {
        return (<div>
            <Content />
        </div>)
    }

    

}
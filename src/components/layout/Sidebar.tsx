import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="">
            <ul>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/chart">Chart & Maps</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
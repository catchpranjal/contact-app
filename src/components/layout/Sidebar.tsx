import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="mt-2">
      <ul>
        <Link to="/">
          <li className="bg-slate-200 m-2 p-2 hover:bg-green-400 hover:cursor-pointer text-center uppercase">
            Contact
          </li>
        </Link>
        <Link to="/chart">
          <li className="bg-slate-200 m-2 p-2 hover:bg-green-400 hover:cursor-pointer text-center uppercase">
            Charts
          </li>
        </Link>
        <Link to="/maps">
          <li className="bg-slate-200 m-2 p-2 hover:bg-green-400 hover:cursor-pointer text-center uppercase">
            Maps
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

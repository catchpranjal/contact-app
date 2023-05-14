import { Link } from "react-router-dom";
interface Props {
  onClose: () => void;
}
const Drawer: React.FC<Props> = (props) => {
  return (
    <>
      <div className="fixed z-40 bg-white shadow-lg w-[70%] h-screen">
        <div className="mt-2">
          <ul>
            <Link to="/">
              <li className="bg-slate-200 m-2 p-2 hover:bg-green-400 hover:cursor-pointer text-center uppercase">
                Contact
              </li>
            </Link>
            <Link to="/chart">
              <li className="bg-slate-200 m-2 p-2 hover:bg-green-400 hover:cursor-pointer text-center uppercase">
                Chart
              </li>
            </Link>
            <Link to="/maps">
              <li className="bg-slate-200 m-2 p-2 hover:bg-green-400 hover:cursor-pointer text-center uppercase">
                Maps
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className="fixed z-30 top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-50 cursor-pointer"
        onClick={props.onClose}
      ></div>
    </>
  );
};

export default Drawer;

import { useLocation } from "react-router-dom";

interface Props {
  onOpen: () => void;
}
const Topbar: React.FC<Props> = (props) => {
  const location = useLocation();
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className="w-8 h-4 flex flex-col justify-between fixed left-5 md:hidden"
        onClick={props.onOpen}
      >
        <div className="w-8 bg-white h-[2px]"></div>
        <div className="w-8 bg-white h-[2px]"></div>
        <div className="w-8 bg-white h-[2px]"></div>
      </div>
      <div>
        {location.pathname === "/" ? "Contact Page" : null}
        {location.pathname === "/chart" ? "Chart & Maps Page" : null}
      </div>
    </div>
  );
};

export default Topbar;

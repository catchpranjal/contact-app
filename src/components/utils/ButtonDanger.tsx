interface Props {
  title: string;
  onClick: () => void;
}

const ButtonDanger: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-2 border-none bg-red-600 hover:bg-red-500 text-white w-full rounded cursor-pointer"
    >
      {props.title}
    </button>
  );
};

export default ButtonDanger;

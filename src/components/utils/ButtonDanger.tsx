interface Props {
  title: string;
  onClick: () => void;
}

const ButtonDanger: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-2 border-none bg-red-600 text-white w-full"
    >
      {props.title}
    </button>
  );
};

export default ButtonDanger;

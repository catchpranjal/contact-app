interface Props {
  title: string;
  onClick: () => void;
}

const ButtonSecondary: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-2 border-none bg-green-400 text-white w-full"
    >
      {props.title}
    </button>
  );
};

export default ButtonSecondary;

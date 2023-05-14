interface Props {
  title: string;
  onClick: () => void;
}

const ButtonPrimary: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-2 border-none bg-purple-950 text-white w-full"
    >
      {props.title}
    </button>
  );
};

export default ButtonPrimary;

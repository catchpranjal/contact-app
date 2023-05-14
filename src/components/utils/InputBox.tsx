interface Props {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<Props> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        className="mx-2 border-2 p-2"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputBox;

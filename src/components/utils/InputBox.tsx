interface Props {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Custom Input Component.
const InputBox: React.FC<Props> = (props) => {
  return (
    <div className="w-full flex">
      <label className="basis-1/3">{props.label}</label>
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        className="mx-2 border-2 p-2 basis-2/3"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputBox;

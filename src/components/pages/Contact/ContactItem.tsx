import ButtonDanger from "../../utils/ButtonDanger";
import ButtonPrimary from "../../utils/ButtonPrimary";
import ButtonSecondary from "../../utils/ButtonSecondary";

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const ContactItem: React.FC<Props> = (props) => {
  return (
    <div>
      <span>
        {props.firstName} {props.lastName}
      </span>
      <span>{props.isActive ? "Active" : "Not Active"}</span>
      <div className="flex flex-col max-w-xs">
        <div className="m-2 w-60">
          <ButtonSecondary title="Edit" onClick={props.onEdit} />
        </div>
        <div className="m-2 w-60">
          <ButtonDanger title="Delete" onClick={props.onDelete} />
        </div>
      </div>
    </div>
  );
};

export default ContactItem;

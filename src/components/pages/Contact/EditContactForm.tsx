import { contactSliceActions } from "../../../store/slices/contact-slice";
import { RootState } from "../../../store/store";
import ButtonPrimary from "../../utils/ButtonPrimary";
import InputBox from "../../utils/InputBox";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactModel } from "../../../models/ContactModel";

interface Props {
  item: ContactModel;
  onClose: () => void;
}

const EditContactForm: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState<string>(props.item.firstName);
  const [lastName, setLastName] = useState<string>(props.item.lastName);
  const [isActive, setIsActive] = useState<boolean>(props.item.isActive);

  const firstNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const statusChangeHandler = () => {
    setIsActive((prev) => !prev);
  };

  const saveContactHandler = () => {
    const item = {
      id: props.item.id,
      firstName: firstName,
      lastName: lastName,
      isActive: isActive,
    };
    dispatch(contactSliceActions.editContact(item));
    props.onClose();
  };

  return (
    <div>
      <div>Edit Form</div>
      <div className="mt-1">
        <InputBox
          id="firstname"
          placeholder="Enter First Name"
          label="First Name"
          value={firstName}
          onChange={firstNameChangeHandler}
        />
      </div>
      <div className="mt-1">
        <InputBox
          id="lastname"
          placeholder="Enter Last Name"
          label="Last Name"
          value={lastName}
          onChange={lastNameChangeHandler}
        />
      </div>
      <div className="mt-1 flex">
        <div>Status</div>
        <div className="mx-2 flex flex-col">
          <div>
            <input
              type="radio"
              name="status"
              title="Active"
              defaultChecked
              onChange={statusChangeHandler}
            />
            <label>Active</label>
          </div>
          <div>
            <input
              type="radio"
              name="status"
              title="InActive"
              onChange={statusChangeHandler}
            />
            <label>InActive</label>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <ButtonPrimary title="Save Contact" onClick={saveContactHandler} />
      </div>
    </div>
  );
};

export default EditContactForm;

import React, { useState } from "react";
import Modal from "../../utils/Modal";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ContactItem from "./ContactItem";
import EditContactForm from "./EditContactForm";
import { useDispatch } from "react-redux";
import { ContactModel } from "../../../models/ContactModel";
import { contactSliceActions } from "../../../store/slices/contact-slice";
import ButtonPrimary from "../../utils/ButtonPrimary";

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector<RootState, ContactModel[]>(
    (state) => state.contactSlice.contacts
  );
  const [editableItem, setEditableItem] = useState<ContactModel>(contacts[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const openEditModalHandler = (item: ContactModel) => {
    setIsEditModalOpen(true);
    setEditableItem(item);
  };

  const closeEditModalHandler = () => {
    setIsEditModalOpen(false);
  };

  const deleteContactHandler = (id: number) => {
    console.log(id);
    dispatch(contactSliceActions.deleteContact(id));
  };

  return (
    <div>
      <div className="flex justify-center mt-9">
        <div className="w-80">
          <ButtonPrimary title="Create Contact" onClick={openModalHandler} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
        {contacts.map((item) => (
          <ContactItem
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            isActive={item.isActive}
            onEdit={openEditModalHandler.bind(this, item)}
            onDelete={deleteContactHandler.bind(this, item.id)}
          />
        ))}
      </div>
      {contacts.length == 0 ? (
        <div className="flex justify-center">
          <div className="border-2 border-gray-400 rounded max-w-md p-5 mt-5 font-semibold">
            No Contact Found. Please add contact from create contact button.
          </div>
        </div>
      ) : null}
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          <ContactForm onClose={closeModalHandler} />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={closeEditModalHandler}>
          <EditContactForm
            onClose={closeEditModalHandler}
            item={editableItem}
          />
        </Modal>
      )}
    </div>
  );
};

export default Contact;

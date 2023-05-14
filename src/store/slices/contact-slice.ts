import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ContactModel } from "../../models/ContactModel";

// export interface ContactModel {
//     id: number,
//     firstName: string,
//     lastName: string,
//     isActive: boolean,
// }

let contacts: ContactModel[] = [];

const initialState = {
    contacts: contacts,
};

const contactSlice = createSlice({
    name: "contact-slice",
    initialState: initialState,
    reducers: {
        addContact(state,action : PayloadAction<ContactModel>){
            let contactItem = action.payload;
            state.contacts.push(contactItem);
        },
        deleteContact(state, action: PayloadAction<number>){
            const filteredArr = state.contacts.filter(item => item.id !== action.payload);
            state.contacts = filteredArr;
        },
        editContact(state,action: PayloadAction<ContactModel>){
            const contactItem = action.payload;
            const filteredArr = state.contacts.filter(item => item.id !== contactItem.id);
            filteredArr.push(contactItem);
            state.contacts = filteredArr;
        }
    }
});

export default contactSlice;
export const contactSliceActions = contactSlice.actions;
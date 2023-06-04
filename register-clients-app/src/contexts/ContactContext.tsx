import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "../services/api";
import {
  iAllContacts,
  iCreateContact,
} from "../pages/Dashboard/contactsSchema";
import { toast } from "react-toastify";
import { iPropsCard } from "../components/Card";

interface iContactContext {
  contacts: iAllContacts;
  setContacts: React.Dispatch<React.SetStateAction<never[]>>;
  openModalCreateContact: boolean;
  setOpenModalCreateContact: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitFormCreateContact: (data: iCreateContact) => Promise<void>;
  openModalUpdateContact: boolean,
  setOpenModalUpdateContact: React.Dispatch<React.SetStateAction<boolean>>,
  onSubmitFormUpdateContact: (data: iCreateContact) => Promise<void>;
  setContactUpdateAndOpenModal: (contact: iPropsCard) => void;
  contactUpdateOrDelete: iPropsCard;
  setContactDeleteAndOpenModal: (contact: iPropsCard) => void;
  openModalDeleteContact: boolean;
  setOpenModalDeleteContact: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContact: () => Promise<void>;
}

export const ContactContext = createContext({} as iContactContext);

export const ContactProvider = () => {
  const [contacts, setContacts] = useState([]);
  const [openModalCreateContact, setOpenModalCreateContact] = useState(false);
  const [openModalUpdateContact, setOpenModalUpdateContact] = useState(false);
  const [openModalDeleteContact, setOpenModalDeleteContact] = useState(false);
  const [listAllContacts, setListAllContacts] = useState({});
  const [contactUpdateOrDelete, setContactUpdateOrDelete] = useState({} as iPropsCard);

  useEffect(() => {
    const listAllContactsByClient = async () => {
      const id = localStorage.getItem("@register_clients_user_id");
      const token = localStorage.getItem("@register_clients_user_token");

      try {
        const response = await api.get(`/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data.contacts);
      } catch (error) {
        console.log(error);
      }
    };
    listAllContactsByClient();
  }, [listAllContacts]);

  const onSubmitFormCreateContact = async (data: iCreateContact) => {
    const token = localStorage.getItem("@register_clients_user_token");

    try {
      const response = await api.post(`/contacts`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato adicionado!");
      setOpenModalCreateContact(false);
      setListAllContacts(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const setContactUpdateAndOpenModal = (contact: iPropsCard) => {
    setContactUpdateOrDelete(contact)
    setOpenModalUpdateContact(true)
  }

  const onSubmitFormUpdateContact = async (data: iCreateContact) => {
    const token = localStorage.getItem("@register_clients_user_token");

    try {
      const response = await api.patch(`/contacts/${contactUpdateOrDelete.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato atualizado!");
      setOpenModalUpdateContact(false);
      setListAllContacts(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const setContactDeleteAndOpenModal = (contact: iPropsCard) => {
    setContactUpdateOrDelete(contact)
    setOpenModalDeleteContact(true)
  }

  const deleteContact = async () => {
    const token = localStorage.getItem("@register_clients_user_token");

    try {
      const response = await api.delete(`/contacts/${contactUpdateOrDelete.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato excluído!");
      setOpenModalDeleteContact(false);
      setListAllContacts(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  console.log(contacts)

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        openModalCreateContact,
        setOpenModalCreateContact,
        onSubmitFormCreateContact,
        openModalUpdateContact,
        setOpenModalUpdateContact,
        onSubmitFormUpdateContact,
        setContactUpdateAndOpenModal,
        contactUpdateOrDelete,
        setContactDeleteAndOpenModal,
        openModalDeleteContact,
        setOpenModalDeleteContact,
        deleteContact,
      }}
    >
      <Outlet />
    </ContactContext.Provider>
  );
};

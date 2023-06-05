import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { AddModal } from "../AddModal";
import { FormRegisterContactModal } from "../FormModal";
import {
  iUpdateContact,
  updateContactSchema,
} from "../../../pages/Dashboard/contactsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactContext } from "../../../contexts/ContactContext";

export const ModalUpdateContact = () => {
  const {
    setOpenModalUpdateContact,
    onSubmitFormUpdateContact,
    contactUpdateOrDelete,
  } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateContact>({
    mode: "onChange",
    resolver: zodResolver(updateContactSchema),
  });

  return (
    <AddModal
      titleModal="Editar Contato"
      onClick={() => setOpenModalUpdateContact(false)}
    >
      <FormRegisterContactModal
        onSubmit={handleSubmit(onSubmitFormUpdateContact)}
        nameButton={"Salvar"}
      >
        <Input
          type="text"
          placeholder="Digite aqui o nome do contato"
          id="name"
          textLabel="Nome"
          register={register("name")}
          defaultValue={contactUpdateOrDelete.name}
        />
        {errors.name && <p className="alertErrors">{errors.name.message}</p>}

        <Input
          type="email"
          placeholder="Digite aqui o email do contato"
          id="email"
          textLabel="E-mail"
          register={register("email")}
          defaultValue={contactUpdateOrDelete.email}
        />
        {errors.email && <p className="alertErrors">{errors.email.message}</p>}

        <Input
          type="text"
          placeholder="Digite aqui o número do telefone do contato"
          id="phone"
          textLabel="Telefone"
          register={register("phone")}
          defaultValue={contactUpdateOrDelete.phone}
        />
        {errors.phone && <p className="alertErrors">{errors.phone.message}</p>}
      </FormRegisterContactModal>
    </AddModal>
  );
};

import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { AddModal } from "../AddModal";
import { FormEditProfileModal } from "../FormModal";
import {
  iRegisterUpdate,
  registerUpdateSchema,
} from "../../../pages/Register/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ClientContext } from "../../../contexts/ClientContext";

export const ModalUpdateClient = () => {
  const {
    user,
    setOpenModalUpdateClient,
    onSubmitFormUpdateClient,
    deleteClient,
  } = useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUpdate>({
    mode: "onChange",
    resolver: zodResolver(registerUpdateSchema),
  });

  return (
    <AddModal
      titleModal="Editar Perfil"
      onClick={() => setOpenModalUpdateClient(false)}
    >
      <FormEditProfileModal
        onSubmit={handleSubmit(onSubmitFormUpdateClient)}
        onClick={() => deleteClient()}
      >
        <Input
          type="text"
          placeholder="Digite aqui seu nome"
          id="name"
          textLabel="Nome"
          register={register("name")}
          defaultValue={user.name}
        />
        {errors.name && <p className="alertErrors">{errors.name.message}</p>}

        <Input
          type="email"
          placeholder="Digite aqui o seu email"
          id="email"
          textLabel="E-mail"
          register={register("email")}
          defaultValue={user.email}
        />
        {errors.email && <p className="alertErrors">{errors.email.message}</p>}

        <Input
          type="text"
          placeholder="Digite aqui o número do telefone"
          id="phone"
          textLabel="Telefone"
          register={register("phone")}
          defaultValue={user.phone}
        />
        {errors.phone && <p className="alertErrors">{errors.phone.message}</p>}
      </FormEditProfileModal>
    </AddModal>
  );
};

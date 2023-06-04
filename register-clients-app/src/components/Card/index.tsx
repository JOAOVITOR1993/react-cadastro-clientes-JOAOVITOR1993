import { ContactContext } from "../../contexts/ContactContext";
import { Button } from "../Button";
import { StyledCard } from "./styles";
import { useContext } from "react";

export interface iPropsCard {
  id: number;
  name: string;
  email: string;
  phone: string;
  updatedAt: string;
}

export const Card = ({ id, name, email, phone, updatedAt }: iPropsCard) => {
  const { setContactUpdateAndOpenModal, setContactDeleteAndOpenModal } =
    useContext(ContactContext);
  const contact = {
    id: id,
    name: name,
    email: email,
    phone: phone,
    updatedAt: updatedAt,
  };

  return (
    <StyledCard>
      <div>
        <h1>{name}</h1>
        <p>{updatedAt}</p>
      </div>
      <p>E-mail: {email}</p>
      <p>Telefone: {phone}</p>
      <div>
        <Button
          className="buttonGrey2"
          type="button"
          name="Editar"
          onClick={() => setContactUpdateAndOpenModal(contact)}
        />
        <Button
          className="buttonPrimary"
          type="button"
          name="Excluir"
          onClick={() => setContactDeleteAndOpenModal(contact)}
        />
      </div>
    </StyledCard>
  );
};

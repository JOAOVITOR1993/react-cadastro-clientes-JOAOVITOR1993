import { ContactContext } from "../../contexts/ContactContext";
import { Button } from "../Button";
import { StyledCard } from "./styles";
import { useContext, useEffect, useState } from "react";

export interface iPropsCard {
  id: number;
  name: string;
  email: string;
  phone: string;
  updatedAt: string;
}

export const Card = ({ id, name, email, phone, updatedAt }: iPropsCard) => {
  const { setContactUpdateAndOpenModal, setContactDeleteAndOpenModal } = useContext(ContactContext);
  const [daysAgo, setDaysAgo] = useState("");
  
  const contact = {
    id: id,
    name: name,
    email: email,
    phone: phone,
    updatedAt: updatedAt,
  };

  useEffect(() => {
    const updatedDate = new Date(updatedAt);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - updatedDate.getTime());
    const daysAgo = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let dayString = "dias"
    if (daysAgo === 1){
      dayString = "dia"
    }
    setDaysAgo(`Há ${daysAgo} ${dayString}`);
  }, [updatedAt]);

  return (
    <StyledCard>
      <div>
        <h1>{name}</h1>
        <p>{daysAgo}</p>
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

import { AddModal } from "../AddModal";
import { useContext } from "react";
import { ContactContext } from "../../../contexts/ContactContext";
import { StyledFormDeleteContactModal } from "../FormModal/styles";
import { Button } from "../../Button";

export const ModalDeleteContact = () => {
  const { setOpenModalDeleteContact, deleteContact, contactUpdateOrDelete } =
    useContext(ContactContext);

  return (
    <AddModal
      titleModal="Excluir Contato"
      onClick={() => setOpenModalDeleteContact(false)}
    >
      <StyledFormDeleteContactModal>
        <h1>
          Tem certeza que deseja excluir o contato{" "}
          <em>
            <span>{contactUpdateOrDelete.name}</span>
          </em>
          ?
        </h1>
        <div className="divButton">
          <Button
            className="buttonGrey2"
            type="button"
            name="Cancelar"
            onClick={() => setOpenModalDeleteContact(false)}
          />
          <Button
            className="buttonRed"
            type="button"
            name="Sim, excluir"
            onClick={() => deleteContact()}
          />
        </div>
      </StyledFormDeleteContactModal>
    </AddModal>
  );
};

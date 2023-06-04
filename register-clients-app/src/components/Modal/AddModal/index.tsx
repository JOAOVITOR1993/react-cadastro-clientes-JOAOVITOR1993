import { ButtonCloseModal } from "../../Button";
import { StyledAddModal } from "./styles";

interface iAddModal {
  titleModal: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const AddModal = ({ titleModal, onClick, children }: iAddModal) => {
  return (
    <StyledAddModal>
      <div>
        <div>
          <h1>{titleModal}</h1>
          <ButtonCloseModal onClick={onClick}/>
        </div>
        {children}
      </div>
    </StyledAddModal>
  );
};
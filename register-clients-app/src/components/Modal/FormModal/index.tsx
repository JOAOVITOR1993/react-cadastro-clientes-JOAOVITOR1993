import { Button } from "../../Button";
import {
  StyledFormRegisterContactModal,
  StyledFormEditProfileModal,
} from "./styles";

interface iFormDashModal {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  nameButton: string;
}

interface iFormEditDashModal {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const FormRegisterContactModal = ({
  onSubmit,
  children,
  nameButton,
}: iFormDashModal) => {
  return (
    <StyledFormRegisterContactModal onSubmit={onSubmit} noValidate>
      <div className="divOverflow">{children}</div>
      <div className="divButton">
        <Button className="buttonGrey2" type="submit" name={nameButton} />
      </div>
    </StyledFormRegisterContactModal>
  );
};

export const FormEditProfileModal = ({
  onSubmit,
  children,
  onClick,
}: iFormEditDashModal) => {
  return (
    <StyledFormEditProfileModal onSubmit={onSubmit}>
      <div className="divOverflow">{children}</div>
      <div className="divButton">
        <Button className="buttonGrey2" type="submit" name="Salvar" />
        <Button
          className="buttonRed"
          onClick={onClick}
          type="button"
          name="Excluir"
        />
      </div>
    </StyledFormEditProfileModal>
  );
};

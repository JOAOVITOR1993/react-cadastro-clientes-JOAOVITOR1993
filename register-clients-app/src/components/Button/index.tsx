import { IconClose, StyledButton, StyledButtonCloseModal } from "./styles";

interface iPropsButton {
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
}

interface iPropsButtonCloseModal {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ className, type, onClick, name }: iPropsButton) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {name}
    </StyledButton>
  );
};

export const ButtonCloseModal = ({ onClick }: iPropsButtonCloseModal) => {
  return (
    <StyledButtonCloseModal type="button" onClick={onClick}>
      <figure>
        <IconClose />
      </figure>
    </StyledButtonCloseModal>
  );
};

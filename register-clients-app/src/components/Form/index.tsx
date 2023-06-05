import { StyledForm } from "./styles";

interface iPropsForm {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const Form = ({ onSubmit, children }: iPropsForm) => {
  return (
    <StyledForm onSubmit={onSubmit} noValidate>
      {children}
    </StyledForm>
  );
};

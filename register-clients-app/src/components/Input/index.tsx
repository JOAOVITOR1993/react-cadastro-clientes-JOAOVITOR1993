import { StyledInput } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form"

interface iPropsInput {
  type: string
  placeholder: string
  id: string
  textLabel: string
  register: UseFormRegisterReturn
  defaultValue?: string | number | readonly string[] | undefined
  disabled?: boolean | undefined
}

export const Input = ({ type, placeholder, id, textLabel, register, defaultValue, disabled }: iPropsInput) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{textLabel}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </StyledInput>
  );
};

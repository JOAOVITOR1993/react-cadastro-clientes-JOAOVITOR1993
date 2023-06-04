import { ClientContext } from "../../contexts/ClientContext";
import { useContext } from "react";
import { iRegister, registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IconLoading, StyleRegister, StyledDivBackLoading } from "./styles";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Register = () => {
  const { onSubmitFormRegister, loading } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  return (
    <StyleRegister>
      <Header to={"/login"} name={"Voltar"} />
      <Form onSubmit={handleSubmit(onSubmitFormRegister)}>
        <h2>Crie sua conta</h2>
        <Input
          type="text"
          placeholder="Digite aqui seu nome"
          id="name"
          textLabel="Nome"
          register={register("name")}
        />
        {errors.name && <p className="alertErrors">{errors.name.message}</p>}

        <Input
          type="email"
          placeholder="Digite aqui o seu email"
          id="email"
          textLabel="E-mail"
          register={register("email")}
        />
        {errors.email && <p className="alertErrors">{errors.email.message}</p>}

        <Input
          type="password"
          placeholder="Digite aqui sua senha"
          id="password"
          textLabel="Senha"
          register={register("password")}
        />
        {errors.password && <p className="alertErrors">{errors.password.message}</p>}

        <Input
          type="text"
          placeholder="Digite aqui o número do telefone"
          id="phone"
          textLabel="Telefone"
          register={register("phone")}
        />
        {errors.password && <p className="alertErrors">{errors.password.message}</p>}

        <Button
          className={"buttonPrimary"}
          type={"submit"}
          name={"Cadastrar"}
        />
      </Form>
      {loading && (
          <StyledDivBackLoading>
            <IconLoading />
          </StyledDivBackLoading>
        )}
    </StyleRegister>
  );
};

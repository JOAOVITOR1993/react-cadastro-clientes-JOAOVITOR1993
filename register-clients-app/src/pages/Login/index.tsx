import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { iLogin, loginSchema } from "./loginSchema";
import { useContext } from "react";
import { ClientContext } from "../../contexts/ClientContext";
import { Button } from "../../components/Button";
import { IconLogo, StyleLogin } from "./styles";

export const Login = () => {
  const { onSubmitFormLogin, loading, navigate } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  return (
    <StyleLogin>
      <header>
        <figure>
          <IconLogo />
          <h1>
            Register <span>Clients</span>
          </h1>
        </figure>
      </header>
      <Form onSubmit={handleSubmit(onSubmitFormLogin)}>
        <h2>Login</h2>
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
        {errors.password && (
          <p className="alertErrors">{errors.password.message}</p>
        )}

        <Button className={"buttonPrimary "} type="submit" name="Entrar" />

        <p className="pRegister">Ainda não possui uma conta?</p>

        <Button
          className={"buttonGrey2 "}
          type={"button"}
          onClick={() => navigate("/register")}
          name={"Cadastre-se"}
        />
      </Form>
    </StyleLogin>
  );
};

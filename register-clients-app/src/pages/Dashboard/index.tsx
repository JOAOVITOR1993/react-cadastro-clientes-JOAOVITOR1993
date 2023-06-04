import { useContext } from "react";
import { Header } from "../../components/Header";
import { ClientContext } from "../../contexts/ClientContext";
import { Button } from "../../components/Button";
import { StyledDashBoard } from "./styles";
import { Card } from "../../components/Card";
import { ContactContext } from "../../contexts/ContactContext";
import { ModalUpdateClient } from "../../components/Modal/ModalUpdateClient";
import { ModalCreateContact } from "../../components/Modal/ModalCreateContact";
import { ModalUpdateContact } from "../../components/Modal/ModalUpdateContact";
import { ModalDeleteContact } from "../../components/Modal/ModalDeleteContact";
import { IconLoading, StyledDivBackLoading } from "../Register/styles";

export const DashBoard = () => {
  const {
    clientLogout,
    user,
    openModalUpdateClient,
    setOpenModalUpdateClient,
    loading,
  } = useContext(ClientContext);

  const { 
    contacts,  
    openModalCreateContact,
    setOpenModalCreateContact,
    openModalUpdateContact,
    openModalDeleteContact,
  } = useContext(ContactContext);

  return (
    <>
      <StyledDashBoard className="container">
        <Header to="/login" name="Sair" onClick={() => clientLogout()} />
        <section>
          <div>
            <h2>Bem vindo {user.name}!</h2>
          </div>
        </section>
        <section>
          <div>
            <Button
              className="buttonGrey2"
              type="button"
              name="Editar Perfil"
              onClick={() => setOpenModalUpdateClient(true)}
            />
            <Button
              className="buttonPrimary"
              type="button"
              name="Cadastrar Contato"
              onClick={() => setOpenModalCreateContact(true)}
            />
          </div>
        </section>
        <section>
          <h3>Contatos</h3>
          <ul>
            {contacts ? (
              contacts.map((element) => {
                const { id, name, email, phone, updatedAt } = element;
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    phone={phone}
                    updatedAt={updatedAt}
                  />
                );
              })
            ) : (
              <h1>Você ainda não tem contatos!</h1>
            )}
          </ul>
        </section>
      </StyledDashBoard>
      {openModalUpdateClient && (<ModalUpdateClient/>)}
      {openModalCreateContact && (<ModalCreateContact/>)}
      {openModalUpdateContact && (<ModalUpdateContact/>)}
      {openModalDeleteContact && (<ModalDeleteContact/>)}
      {loading && (
          <StyledDivBackLoading>
            <IconLoading />
          </StyledDivBackLoading>
        )}
    </>
  );
};

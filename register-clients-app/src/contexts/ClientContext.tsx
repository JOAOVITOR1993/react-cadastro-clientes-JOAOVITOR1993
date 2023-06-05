import { createContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { ILoginUserSchemaResponse, iLogin } from "../pages/Login/loginSchema";
import { iRegister, iRegisterUpdate } from "../pages/Register/registerSchema";

interface iClientContextProps {
  children: React.ReactNode;
}

interface iClientContext {
  onSubmitFormRegister: (data: iRegister) => Promise<void>;
  onSubmitFormLogin: (data: iLogin) => Promise<void>;
  loading: boolean;
  clientLogout: () => void;
  navigate: NavigateFunction;
  user: ILoginUserSchemaResponse;
  openModalUpdateClient: boolean;
  setOpenModalUpdateClient: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitFormUpdateClient: (data: iRegisterUpdate) => Promise<void>;
  deleteClient: () => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClientContext = createContext({} as iClientContext);

export const ClientProvider = ({ children }: iClientContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as ILoginUserSchemaResponse);
  const [loading, setLoading] = useState(false);
  const [openModalUpdateClient, setOpenModalUpdateClient] = useState(false);

  const onSubmitFormRegister = async (data: iRegister) => {
    setLoading(true);

    try {
      await api.post("/clients", data);
      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitFormLogin = async (data: iLogin) => {
    setLoading(true);

    try {
      const response = await api.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@register_clients_user_token", response.data.token);
      localStorage.setItem("@register_clients_user_id", response.data.user.id);
      toast.success("Login realizado com sucesso!");
      navigate(`/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitFormUpdateClient = async (data: iRegisterUpdate) => {
    setLoading(true);
    const id = localStorage.getItem("@register_clients_user_id");
    const token = localStorage.getItem("@register_clients_user_token");

    try {
      const response = await api.patch(`/clients/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Conta atualizada com sucesso!");
      setOpenModalUpdateClient(false);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const deleteClient = async () => {
    setLoading(true);
    const id = localStorage.getItem("@register_clients_user_id");
    const token = localStorage.getItem("@register_clients_user_token");

    try {
      await api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Conta deletada com sucesso!");
      setOpenModalUpdateClient(false);
      clientLogout();
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const clientLogout = () => {
    localStorage.removeItem("@register_clients_user_token");
    localStorage.removeItem("@register_clients_user_id");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@register_clients_user_token");
    const id = localStorage.getItem("@register_clients_user_id");

    const getProfile = async () => {
      if (token) {
        try {
          const response = await api.get(`/clients/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        navigate("/");
      }
    };
    getProfile();
  }, []);

  return (
    <ClientContext.Provider
      value={{
        onSubmitFormRegister,
        onSubmitFormLogin,
        loading,
        clientLogout,
        navigate,
        user,
        openModalUpdateClient,
        setOpenModalUpdateClient,
        onSubmitFormUpdateClient,
        deleteClient,
        setLoading,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

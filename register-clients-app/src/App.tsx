import { GlobalStyle } from "./styles/globalStyle";
import { ClientProvider } from "./contexts/ClientContext";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer autoClose={3000}/>
      <ClientProvider>
        <RoutesMain/>
      </ClientProvider>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import DyslexicContextProvider from "./context/DyslexicContext";
import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <DyslexicContextProvider>
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </DyslexicContextProvider>
  );
}

export default App;

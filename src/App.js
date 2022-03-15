import Header from "./components/header";
import Main from "./components/main";
import AppContextProvider from "./context/app-context";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Main />
    </AppContextProvider>
  );
}

export default App;

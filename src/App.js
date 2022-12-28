import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/GlobalStyles";
import NavBar from "./components/navbar";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

import { useAppHook } from "./hooks/useAppHook";
import { Toaster } from "react-hot-toast";

function App() {
  const [
    todoList,
    personData,
    setPersonData,
    textSearch,
    setTextSearch,
    theme,
    toggleTheme,
    themeMode,
  ] = useAppHook();
  // console.log(personData);
  return (
    <>
      <div>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <NavBar
            handleSearch={setTextSearch}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </ThemeProvider>
        <div>
          <div className="container">
            <div className="app__wrapper">
              <AppHeader />
              <AppContent
                personData={personData.filter((todo) =>
                  todo.title.toLowerCase().includes(textSearch)
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;

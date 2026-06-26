import { useState } from "react";
import AppRouter from "./router/AppRouter";


export function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (

    <div className={darkMode ? "dark" : 'light'}>

      <AppRouter
        darkMode={darkMode}
        setDarkMode={setDarkMode} />
    </div>


  );

}

export default App;

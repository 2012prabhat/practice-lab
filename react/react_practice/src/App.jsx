import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routesConfig } from "./routesConfig";



function App() {


  return (


      <BrowserRouter>
        <Routes>
          {routesConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>

  );
}

export default App;


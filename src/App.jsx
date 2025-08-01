import { BrowserRouter, Routes, Route } from "react-router-dom";
import Komponents from "./Main/Komponents";
import Layout from "./layout";
import Admin from "./Admin/Admin";
import { routes } from './routes';

import "./App.css";
import "./Main.css";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Komponents />} />

        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

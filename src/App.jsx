import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Komponents from "./Main/Komponents";
import Layout from "./layout";
import Admin from "./Admin/Admin";
import { routes } from './routes';

import "./App.css";
import "./Main.css";
import { useEffect, useState } from "react";
import Loader from "./components/loader";

function App() {

  const location = useLocation()
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true)

    const timeOut = setTimeout(() => {
      setLoading(false)
    }, 900);

    return ()=> clearTimeout(timeOut)
  }, [location])

  return (
    <>
      {loading && <Loader/>}
      <Routes>
        <Route path="/admin/*" element={<Admin />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Komponents />} />

          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;

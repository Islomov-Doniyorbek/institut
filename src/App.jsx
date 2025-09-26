import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Komponents from "./Main/Komponents";
import Layout from "./layout";

import { routes } from './routes';
import './Dark.css'
import "./App.css";
import "./Main.css";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import AllnewsInner from "./Pages/InfoCenter/AllnewsInner";
import EventInner from "./Pages/InfoCenter/EventInner";

import Institutrasm from "./Pages/Institut/Institutrasm";
import KengashInfo from "./Pages/Institut/Tarkib_inner/KengashInfo";
import KenagashInfoRegi from "./Pages/Institut/Tarkib_inner/KenagashInfoRegi";
import KengashAxborot from "./Pages/Institut/Tarkib_inner/KengashAxborot";
import TarkibMarket from "./Pages/Institut/Tarkib_inner/TarkibMarket";
import TarkibHamkorlik from "./Pages/Institut/Tarkib_inner/TarkibHamkorlik";
import Studentslife from "./Main/Talabalr/Studentslife";
import MadaniyTadbir from "./Main/Talabalr/MadaniyTadbir";
import Stependiyalar from "./Main/Talabalr/Stependiyalar";


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
        <Route path="/" element={<Layout />}>


      <Route path="/studentslife" element={<Studentslife />} />
 <Route path="/madaniytadbir" element={<MadaniyTadbir />} />
 <Route path="/stipendiya" element={<Stependiyalar />} />

        <Route path="/News/Allnews/AllmewsInner" element={<AllnewsInner />} />
            <Route path="/News/Events/EventsInner" element={<EventInner/>} />

              <Route path="/Institut/Ichki" element={<Institutrasm/>} />
 <Route path="/Institut/Tuzilma/Inner" element={<KengashInfo/>} />
  <Route path="/Institut/Tuzilma/InnerReg" element={<KenagashInfoRegi/>} />
   <Route path="/Institut/Tuzilma/AxborotTizim" element={<KengashAxborot/>} />
    <Route path="/Institut/Tuzilma/tarkibmarketing" element={<TarkibMarket/>} />
        <Route path="/Institut/Tuzilma/tarkibhamkorlik" element={<TarkibHamkorlik/>} />
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

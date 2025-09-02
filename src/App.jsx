import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Komponents from "./Main/Komponents";
import Layout from "./layout";
import Admin from "./Admin/Admin";
import { routes } from './routes';
import './Dark.css'
import "./App.css";
import "./Main.css";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import AllnewsInner from "./Pages/InfoCenter/AllnewsInner";
import EventInner from "./Pages/InfoCenter/EventInner";
import EventInnerr from "./Pages/InfoCenter/StatInners/EventInnerr";
import EventsInnerrr from "./Pages/InfoCenter/StatInners/EventsInnerrr";
import Institutrasm from "./Pages/Institut/Institutrasm";
import History_doc from "./Pages/History/History_doc";
import KengashInfo from "./Pages/Institut/Tarkib_inner/KengashInfo";
import KenagashInfoRegi from "./Pages/Institut/Tarkib_inner/KenagashInfoRegi";
import KengashAxborot from "./Pages/Institut/Tarkib_inner/KengashAxborot";
import TarkibMarket from "./Pages/Institut/Tarkib_inner/TarkibMarket";
import TarkibHamkorlik from "./Pages/Institut/Tarkib_inner/TarkibHamkorlik";
import OthernewsIner1 from "./Pages/InfoCenter/StatInners/OterNewsInner1";
import OtherNewsInner2 from "./Pages/InfoCenter/StatInners/OtherNewsInner2";
import OtherNewsInner3 from "./Pages/InfoCenter/StatInners/OtherNewsInner3";
import OtherNewsInner4 from "./Pages/InfoCenter/StatInners/OtherNewsInner4";
import OtherNewsInner5 from "./Pages/InfoCenter/StatInners/OtherNewsInner5";
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
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Layout />}>


      <Route path="/studentslife" element={<Studentslife />} />
 <Route path="/madaniytadbir" element={<MadaniyTadbir />} />
 <Route path="/stipendiya" element={<Stependiyalar />} />

        <Route path="/News/Allnews/AllmewsInner" element={<AllnewsInner />} />
            <Route path="/News/Events/EventsInner" element={<EventInner/>} />
            <Route path="/News/Events/EventsInner2" element={<EventInnerr/>} />
            <Route path="/News/Events/EventsInner3" element={<EventsInnerrr/>} />
               <Route path="/News/Allnews/OthernewsInner1" element={<OthernewsIner1/>} />
                  <Route path="/News/Allnews/OthernewsInner2" element={<OtherNewsInner2/>} />
                               <Route path="/News/Allnews/OthernewsInner3" element={<OtherNewsInner3/>} />
                                            <Route path="/News/Allnews/OthernewsInner4" element={<OtherNewsInner4/>} />
                                                         <Route path="/News/Allnews/OthernewsInner5" element={<OtherNewsInner5/>} />
              <Route path="/Institut/Ichki" element={<Institutrasm/>} />
                      <Route path="/History/History_doc" element={<History_doc/>} />
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

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Komponents from "./Main/Komponents";
import Activity from "./Pages/Activity/Activity";
import ActiveCouncil from "./Pages/Activity/ActiveCouncil";
import Article from "./Pages/Activity/Article";
import Projects from "./Pages/Activity/Projects";
import Tuzilma from "./Pages/Institut/Tuzilma";
import "./App.css";
import "./Main.css";
import Container from "./components/Container";
import FakultetInfo from "./Pages/Institut/fakultetInfo";
import Allnews from "./Pages/InfoCenter/Allnews";
import AllnewsInner from "./Pages/InfoCenter/AllnewsInner";
import Event from "./Pages/InfoCenter/Event";
import Galery from "./Pages/InfoCenter/Galery";
import OtherNews from "./Pages/InfoCenter/Othernews";
import Layout from "./layout";
import Connect from "./Pages/InfoCenter/Connect";
import Documents from "./Pages/InfoCenter/Documents";
import FakultetKafedra from "./Pages/Institut/fakultet";
import Bakalavr from "./Pages/Talim/Bakalavr";
import Kafedra from "./Pages/Institut/kafedra";
import Ecostudent from './Pages/Students/Ecostudent'
import Achievements from './Pages/Students/Achievements'
import Test from './Pages/Students/Test'
import Grand from './Pages/Students/Grand'
import OthernewsIner from "./Pages/InfoCenter/OthernewsIner";
import EventInner from "./Pages/InfoCenter/EventInner";
import Rahbariyat from "./Pages/Institut/rahbariyat";
import Tarix from "./Pages/Institut/tarix";
import Document from "./Pages/Institut/document";
import Hamkorlik from "./Pages/Institut/hamkorlik";
import Anchors from "./Pages/Institut/anchors";
import Biography from "./Pages/Institut/biography";
import Callcenter from "./Pages/Accept/Callcenter";
import Place from "./Pages/Accept/Place";
import Program from "./Pages/Accept/Program";
import Follow from "./Pages/Accept/Follow";
import Forigns from "./Pages/Accept/Forigns";
import Magister from "./Pages/Talim/Magister";
import LessonTable from "./Pages/Talim/LessonTable";
import Laststudents from "./Pages/Talim/Laststudents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Komponents />} />
        <Route path="Activity/Activity" element={<Activity />} />
        <Route path="Activity/ActiveCouncil" element={<ActiveCouncil />} />
        <Route path="Activity/Article" element={<Article />} />
        <Route path="Activity/Projects" element={<Projects />} />
        <Route path="/Institut/fakultet" element={<FakultetKafedra />} />
        <Route
          path="/Institut/fakultetInfo/:fakultet"
          element={<FakultetInfo />}
        />
        <Route
          path="/Institut/kafedra/:kafedra"
          element={<Kafedra />}
        />
        <Route path="/Institut/Tuzilma" element={<Tuzilma />} />
        <Route path="/Institut/rahbariyat" element={<Rahbariyat />} />
        <Route path="/Institut/tarix" element={<Tarix />} />
        <Route path="/Institut/Meyoriy Huquqiy Hujjatlar" element={<Document />} />
        <Route path="/Institut/Xalqaro hamkorlik" element={<Hamkorlik />} />
        <Route path="/Institut/Foydali havolalar" element={<Anchors />} />
        <Route path="/Institut/Botir Zokirov hayoti va ijodi" element={<Biography />} />

        <Route path="/News/Allnews" element={<Allnews />} />
        <Route path="/News/Events" element={<Event />} />
        <Route path="/News/Galery" element={<Galery />} />
        <Route path="/News/Connect" element={<Connect />} />
        <Route path="/News/Documents" element={<Documents />} />
        <Route path="/News/Allnews" element={<Allnews />} />
          <Route path="/News/Events" element={<Event />} />
          <Route path="/News/Galery" element={<Galery />} />
          <Route path="/News/Connect" element={<Connect />} />
                    <Route path="/News/Documents" element={<Documents />} />
          <Route path="/News/Allnews/Innernews" element={<AllnewsInner/>} />
      <Route path="/News/Allnews/Othernews" element={<OtherNews/>} />
   <Route path="/News/Allnews/OthernewsInner" element={<OthernewsIner/>} />
      <Route path="/News/Allnews/EventInner" element={<EventInner/>} />

            <Route path="/Students/Ekostudents" element={<Ecostudent />} />
               <Route path="/Students/Grand" element={<Grand/>} />
             <Route path="/Students/Yutuqlar" element={<Achievements />} />
                  <Route path="/Students/Test" element={<Test/>} />

             <Route path="/Qabul/Callcenter" element={<Callcenter/>} />
       <Route path="/Qabul/Qabulkvotalari" element={<Place/>} />
              <Route path="/Qabul/QabulDasturlari" element={<Program/>} />
                        <Route path="/Qabul/Kuzatuv" element={<Follow/>} />
                           <Route path="/Qabul/XorijiyStudentlar" element={<Forigns/>} />
        <Route path="/Talim/Bakalavr" element={<Bakalavr />} />
         <Route path="/Talim/Magister" element={<Magister />} />
          <Route path="/Talim/DarsJadvali" element={<LessonTable/>} />
          <Route path="/Talim/Bitiruvchilar" element={<Laststudents/>} />
      </Route>
    </Routes>
  );
}

export default App;

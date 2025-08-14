// routes.js
import Activity from "./Pages/Activity/Activity";
import ActiveCouncil from "./Pages/Activity/ActiveCouncil";
import Article from "./Pages/Activity/Article";
import Projects from "./Pages/Activity/Projects";

import FakultetKafedra from "./Pages/Institut/fakultet";
import FakultetInfo from "./Pages/Institut/fakultetInfo";
import Kafedra from "./Pages/Institut/kafedra";
import Tuzilma from "./Pages/Institut/Tuzilma";
import Rahbariyat from "./Pages/Institut/rahbariyat";
import Tarix from "./Pages/Institut/tarix";
import Document from "./Pages/Institut/document";
import Hamkorlik from "./Pages/Institut/hamkorlik";
import Anchors from "./Pages/Institut/anchors";
import Biography from "./Pages/Institut/biography";
import Tarkib from "./Pages/Institut/tarkib";

import Allnews from "./Pages/InfoCenter/Allnews";
import AllnewsInner from "./Pages/InfoCenter/AllnewsInner";
import Event from "./Pages/InfoCenter/Event";
import EventInner from "./Pages/InfoCenter/EventInner";
import OtherNews from "./Pages/InfoCenter/Othernews";
import OthernewsIner from "./Pages/InfoCenter/OthernewsIner";
import Galery from "./Pages/InfoCenter/Galery";
import Connect from "./Pages/InfoCenter/Connect";
import Documents from "./Pages/InfoCenter/Documents";

import Ecostudent from './Pages/Students/Ecostudent';
import Achievements from './Pages/Students/Achievements';
import Test from './Pages/Students/Test';
import Grand from './Pages/Students/Grand';

import Callcenter from "./Pages/Accept/Callcenter";
import Place from "./Pages/Accept/Place";
import Program from "./Pages/Accept/Program";
import Follow from "./Pages/Accept/Follow";
import Forigns from "./Pages/Accept/Forigns";

import Bakalavr from "./Pages/Talim/Bakalavr";
import Magister from "./Pages/Talim/Magister";
import LessonTable from "./Pages/Talim/LessonTable";
import Laststudents from "./Pages/Talim/Laststudents";
import Zoom from "./Pages/Students/Zoom";
import History from "./Pages/History/History";
 
export const routes = [
  // Activity
  { path: "Activity/Activity", element: <Activity /> },
  { path: "Activity/ActiveCouncil", element: <ActiveCouncil /> },
  { path: "Activity/Article", element: <Article /> },
  { path: "Activity/Projects", element: <Projects /> },

  // Institut
  { path: "/Institut/fakultet", element: <FakultetKafedra /> },
  { path: "/Institut/fakultetInfo/:fakultet", element: <FakultetInfo /> },
  { path: "/Institut/kafedra/:kafedra", element: <Kafedra /> },
  { path: "/Institut/Tuzilma", element: <Tuzilma /> },
  { path: "/Institut/rahbariyat", element: <Rahbariyat /> },
  { path: "/Institut/tarix", element: <Tarix /> },
  { path: "/Institut/Meyoriy Huquqiy Hujjatlar", element: <Document /> },
  { path: "/Institut/Xalqaro hamkorlik", element: <Hamkorlik /> },
  { path: "/Institut/Foydali havolalar", element: <Anchors /> },
  { path: "/Institut/Botir Zokirov hayoti va ijodi", element: <Biography /> },
  { path: "/Institut/Tarkibiy Tuzilma", element: <Tarkib /> },

  // News
  { path: "/News/Allnews", element: <Allnews /> },
  { path: "/News/Allnews/Innernews", element: <AllnewsInner /> },
  { path: "/News/Allnews/Othernews", element: <OtherNews /> },
  { path: "/News/Allnews/OthernewsInner", element: <OthernewsIner /> },
  { path: "/News/Allnews/EventInner", element: <EventInner /> },
  { path: "/News/Events", element: <Event /> },
  { path: "/News/Galery", element: <Galery /> },
  { path: "/News/Connect", element: <Connect /> },
  { path: "/News/Documents", element: <Documents /> },

  // Students
  { path: "/Students/Ekostudents", element: <Ecostudent /> },
  { path: "/Students/Grand", element: <Grand /> },
  { path: "/Students/Yutuqlar", element: <Achievements /> },
  { path: "/Students/Test", element: <Test /> },


  // Qabul
  { path: "/Qabul/Callcenter", element: <Callcenter /> },
  { path: "/Qabul/Qabulkvotalari", element: <Place /> },
  { path: "/Qabul/QabulDasturlari", element: <Program /> },
  { path: "/Qabul/Kuzatuv", element: <Follow /> },
  { path: "/Qabul/XorijiyStudentlar", element: <Forigns /> },

  // Talim
  { path: "/Talim/Bakalavr", element: <Bakalavr /> },
  { path: "/Talim/Magister", element: <Magister /> },
  { path: "/Talim/DarsJadvali", element: <LessonTable /> },
  { path: "/Talim/Bitiruvchilar", element: <Laststudents /> },
  

  //History
    { path: "/History/History", element: <History /> }
];

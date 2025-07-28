import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Komponents from './Main/Komponents'
import Activity from './Pages/Activity/Activity'
import ActiveCouncil from './Pages/Activity/ActiveCouncil'
import Article from './Pages/Activity/Article'
import Projects from './Pages/Activity/Projects'
import Tuzilma from './Pages/Tuzilma/Tuzilma'
import './App.css'
import './Main.css'
import Allnews from './Pages/InfoCenter/Allnews'
import AllnewsInner from './Pages/InfoCenter/AllnewsInner'
import Event from './Pages/InfoCenter/Event'
import Galery from './Pages/InfoCenter/Galery'
import OtherNews from './Pages/InfoCenter/OtherNews'
import Layout from './layout'
import Connect from './Pages/InfoCenter/Connect'
import Documents from './Pages/InfoCenter/Documents'
import Ecostudent from './Pages/Students/Ecostudent'
import Achievements from './Pages/Students/Achievements'
import Test from './Pages/Students/Test'
import Grand from './Pages/Students/Grand'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Komponents />} />
          <Route path="Activity/Activity" element={<Activity />} />
          <Route path="Activity/ActiveCouncil" element={<ActiveCouncil />} />
          <Route path="Activity/Article" element={<Article />} />
          <Route path="Activity/Projects" element={<Projects />} />
          <Route path="/Tuzilma/Tuzilma" element={<Tuzilma />} />
          <Route path="/News/Allnews" element={<Allnews />} />
          <Route path="/News/Events" element={<Event />} />
          <Route path="/News/Galery" element={<Galery />} />
          <Route path="/News/Connect" element={<Connect />} />
                    <Route path="/News/Documents" element={<Documents />} />
          <Route path="/News/Allnews/Innernews" element={<AllnewsInner/>} />
      <Route path="/News/Allnews/Othernews" element={<OtherNews/>} />


            <Route path="/Students/Ekostudents" element={<Ecostudent />} />
               <Route path="/Students/Grand" element={<Grand/>} />
             <Route path="/Students/Yutuqlar" element={<Achievements />} />
                  <Route path="/Students/Test" element={<Test/>} />
        </Route>
      </Routes>
  )
}

export default App

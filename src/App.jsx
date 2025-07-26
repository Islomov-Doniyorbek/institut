import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Komponents from './Main/Komponents'
import Activity from './Pages/Activity/Activity'
import ActiveCouncil from './Pages/Activity/ActiveCouncil'
import Article from './Pages/Activity/Article'
import Projects from './Pages/Activity/Projects'
import Tuzilma from './Pages/Tuzilma/Tuzilma'
import './App.css'
import './Main.css'
import FakultetKafedra from './Pages/Tuzilma/fakultet'
import Container from './components/Container'
import FakultetInfo from './Pages/Tuzilma/fakultetInfo'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Komponents />} />
          <Route path="Activity/Activity" element={<Activity />} />
          <Route path="Activity/ActiveCouncil" element={<ActiveCouncil />} />
          <Route path="Activity/Article" element={<Article />} />
          <Route path="Activity/Projects" element={<Projects />} />
          <Route path="/Tuzilma/fakultet" element={<FakultetKafedra />} />
          <Route path="/Tuzilma/fakultetInfo/:fakultet" element={<FakultetInfo />} />
        </Route>
      </Routes>
  )
}

export default App

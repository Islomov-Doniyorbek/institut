import './App.css'
import Layout from './layout'
import Komponents from './Main/Komponents'
import './Main.css'
import Activity from './Pages/Activity/Activity'
import { Route, Routes } from 'react-router-dom'
import ActiveCouncil from './Pages/Activity/ActiveCouncil'
import Article from './Pages/Activity/Article'
import Projects from './Pages/Activity/Projects'
function App() {
  return (
    // children bizda Layoutni ichidagi Komponents
    <Layout>
<Article/>

    </Layout>
  )
}

export default App

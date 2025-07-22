import './App.css'
import Layout from './layout'
import Komponents from './Main/Komponents'
import './Main.css'
function App() {
  return (
    // children bizda Layoutni ichidagi Komponents
    <Layout>
      <Komponents />

    </Layout>
  )
}

export default App

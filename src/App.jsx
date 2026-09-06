import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Materials from './pages/Materials'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import MaterialLanding from './pages/MaterialLanding'
import JcbLorryServices from './pages/JcbLorryServices'
import Areas from './pages/Areas'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="materials" element={<Materials />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="m-sand-supplier-chennai" element={<MaterialLanding pageKey="m-sand-supplier-chennai" />} />
          <Route path="river-sand-supplier-chennai" element={<MaterialLanding pageKey="river-sand-supplier-chennai" />} />
          <Route path="stone-jalli-supplier-chennai" element={<MaterialLanding pageKey="stone-jalli-supplier-chennai" />} />
          <Route path="filling-gravel-supplier-chennai" element={<MaterialLanding pageKey="filling-gravel-supplier-chennai" />} />
          <Route path="jcb-lorry-services-chennai" element={<JcbLorryServices />} />
          <Route path="areas-we-serve" element={<Areas />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

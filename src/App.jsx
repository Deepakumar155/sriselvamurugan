import { Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Materials from './pages/Materials'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import MaterialLanding from './pages/MaterialLanding'
import JcbLorryServices from './pages/JcbLorryServices'
import Areas from './pages/Areas'
import LocationPage from './pages/LocationPage'
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
          <Route path="m-sand" element={<MaterialLanding pageKey="m-sand" />} />
          <Route path="river-sand" element={<MaterialLanding pageKey="river-sand" />} />
          <Route path="stone-jalli" element={<MaterialLanding pageKey="stone-jalli" />} />
          <Route path="filling-gravel" element={<MaterialLanding pageKey="filling-gravel" />} />
          <Route path="red-sand" element={<MaterialLanding pageKey="red-sand" />} />
          <Route path="jcb-lorry-services" element={<JcbLorryServices />} />
          <Route path="areas-we-serve" element={<Areas />} />
          <Route path="construction-materials-chengalpattu" element={<LocationPage locationKey="chengalpattu" />} />
          <Route path="construction-materials-thiruporur" element={<LocationPage locationKey="thiruporur" />} />
          <Route path="construction-materials-kelambakkam" element={<LocationPage locationKey="kelambakkam" />} />
          <Route path="construction-materials-tambaram" element={<LocationPage locationKey="tambaram" />} />
          <Route path="m-sand-supplier-chennai" element={<Navigate to="/m-sand" replace />} />
          <Route path="river-sand-supplier-chennai" element={<Navigate to="/river-sand" replace />} />
          <Route path="stone-jalli-supplier-chennai" element={<Navigate to="/stone-jalli" replace />} />
          <Route path="filling-gravel-supplier-chennai" element={<Navigate to="/filling-gravel" replace />} />
          <Route path="jcb-lorry-services-chennai" element={<Navigate to="/jcb-lorry-services" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

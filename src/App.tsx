import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SiteHeader from './sections/SiteHeader'
import Resume from './pages/Resume'
import ProjectIndex from './pages/ProjectIndex'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

function App() {
  const { pathname } = useLocation()

  // Routing keeps the scroll position by default; every page here starts at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects" element={<ProjectIndex />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

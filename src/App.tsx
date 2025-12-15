import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy load pages for code splitting - HomePage is most critical, load immediately
import HomePage from './pages/HomePage'

// Lazy load secondary routes - only loaded when visited
const ReferralPage = lazy(() => import('./pages/ReferralPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-warm-900 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/r/:slug" element={<ReferralPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

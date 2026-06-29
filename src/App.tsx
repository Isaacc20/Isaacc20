
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import HomeV2 from './pages/v2/HomeV2'

function App() {

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/v2" element={<HomeV2 />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App

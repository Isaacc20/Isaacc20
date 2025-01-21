
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Home />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './app/home/page'

export const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

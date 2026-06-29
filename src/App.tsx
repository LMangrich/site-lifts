import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './app/home/page'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

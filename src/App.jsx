import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home'

import './css/App.css'

function App() {
  return (
    <div id='App'>
      <Router>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="review/:id" element={<h1>Detail Page Review</h1>} />
          <Route path="movies/:type" element={<h1>Top 100 Movies</h1>} />
          <Route path="series/:type" element={<h1>Top 100 Series</h1>} />
          <Route path="myList" element={<h1>My List</h1>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

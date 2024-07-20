import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { MovieList } from './components/MovieList'
import { MovieDetail } from './pages/MovieDetail'

import './css/App.css'

function App() {
  return (
    <div id='App'>
      <Router>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="myList" element={<h1>My List</h1>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

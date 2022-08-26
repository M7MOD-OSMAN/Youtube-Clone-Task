import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SearchBar from './SearchBar'
import SearchPage from './SearchPage'
import Home from './Home'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [videos, setVideos] = useState([])
  const [query, setQuery] = useState('')
  // useEffect(() => {
  //   fetch()
  // }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyDjA50Khvdl0a_RbGLVy5tLGB29huLOl4A`
      )
      .then((res) => {
        console.log(res)
        setVideos(res.data.items)
      })
  }

  return (
    <BrowserRouter>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <Routes>
        <Route
          path='/search/:query'
          element={<SearchPage videos={videos} />}
        ></Route>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VideoItem from './VideoItem'

const Home = () => {
  const [recommendedVideos, setRecommendedVideos] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=EG&key=AIzaSyDjA50Khvdl0a_RbGLVy5tLGB29huLOl4A`
      )
      .then((res) => {
        console.log(res)
        setRecommendedVideos(res.data.items)
      })
  }, [])

  return (
    <div className='mainBody'>
      <div className='mainBodyContainer'>
        {recommendedVideos &&
          recommendedVideos.map((video) => (
            <VideoItem video={video} key={video.id} />
          ))}
      </div>
    </div>
  )
}

export default Home

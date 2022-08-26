import React from 'react'
import VideoItem from './VideoItem'
import { useParams } from 'react-router-dom'
const SearchPage = ({ videos }) => {
  const query = useParams()
  return (
    <div className='mainBody'>
      <div className='mainBodyContainer'>
        {videos &&
          videos.map((video) => (
            <VideoItem video={video} key={video.id.videoId} />
          ))}
      </div>
    </div>
  )
}

export default SearchPage

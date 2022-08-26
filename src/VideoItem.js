import React from 'react'

const VideoItem = ({ video }) => {
  return (
    <div className='video'>
      <img
        className='video__thumbnail'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='video__details'>
        <div className='title'>
          <h3>{video.snippet.title}</h3>
          <h4 href=''>{video.snippet.channelTitle}</h4>
        </div>
      </div>
    </div>
  )
}

export default VideoItem

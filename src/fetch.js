const fetch = () => {
  fetch(
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC52XYgEExV9VG6Rt-6vnzVA&maxResults=20&q=cat&key=AIzaSyDbUv2IXpi7M5f2DnQnYwdSjQOKFUwAJ6c'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
}

fetch()

import { Video } from 'gatsby-video'

const RenderVideo = props => {
  const { data } = props

  return (
    <Video
      autoPlay
      muted
      loop
      controls
      sources={[data.videos.webm, data.videos.mp4]}
    />
  )
}

export default RenderVideo

import { useParams } from "react-router-dom";


const Post = () => {
  const { postid } = useParams();

  return (
    <div>Single post, id: {postid}</div>
  )
}

export default Post
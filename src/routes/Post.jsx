import { useParams } from "react-router-dom";
import useData from "../hooks/useData"
import { DateTime } from "luxon";
import { useState } from "react";

const Post = () => {
  const { postid } = useParams();
  const [refetchComments, setRefetchComments] = useState(false);
  const postData = useData(`https://pleasant-utopian-duke.glitch.me/posts/${postid}`);
  const commentsData = useData(`https://pleasant-utopian-duke.glitch.me/posts/${postid}/comments`, refetchComments);
  const commentsArray = commentsData && commentsData.posts;

  function convertTime(time) {
    const createdAtDate = new Date(time);
    return DateTime.fromJSDate(createdAtDate).toLocaleString(DateTime.DATETIME_MED);
  }

  const [formData, setFormData] = useState({
    text: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://pleasant-utopian-duke.glitch.me/posts/${postid}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setRefetchComments(!refetchComments);
        console.log("ok");
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.error('Something went wrong:', error);
      // Handle other error cases
    }
  };

  return (
    <main>
      {postData &&
        <article className="single-article">
          <h3>{postData.post.title}</h3>
          <p>Author: {postData.post.author.username}, posted at: {convertTime(postData.post.createdAt)}</p>
          <p className="single-article-text">{postData.post.text}</p>

        </article>
      }

      <section className="comments-section">
        <h4>Comments</h4>

        <div className="comments-form">
          <form onSubmit={handleSubmit}>
            <div className="input-holder">
              <label htmlFor="text">Write new comment:</label>
              <textarea name="text" id="text" rows={3} value={formData.text} onChange={handleChange} required />
            </div>

            <button className="send-comment-btn" type="submit">Send</button>
          </form>
        </div>

        {commentsData && commentsArray.map(comment => ( 
          <p className="comment" key={comment._id}>{comment.author.username}: {comment.text} <span>({convertTime(comment.createdAt)})</span></p>
        ))}
      </section>
    </main>
  )
}

export default Post
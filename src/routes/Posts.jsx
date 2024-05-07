import useData from "../hooks/useData"
import { Link } from "react-router-dom";

const Posts = () => {
  const data = useData('http://localhost:3000/posts');
  const postsArray = data && data.posts;

  return (
    <main>
      {postsArray && <p className="article-count">{postsArray.length} articles.</p>}
      <section className="recently-published-container">
        {postsArray && postsArray.map(post => ( 
          <article className="recently-published-article" key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>

            <Link to={"/posts/" + post._id}>Read more...</Link>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Posts
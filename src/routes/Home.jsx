import useData from "../hooks/useData"

const Home = () => {
  const data = useData('http://localhost:3000/posts');
  console.log(data);

  return (
    <div>Home page</div>
  )
}

export default Home
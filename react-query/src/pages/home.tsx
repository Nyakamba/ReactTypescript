import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="grid">
        <Link to={`/1`} className="user">
          <span>username</span>
        </Link>
      </div>
    </>
  );
};

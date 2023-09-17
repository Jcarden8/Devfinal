import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const categories = ["Health", "Food", "Travel", "Technology"];

  const navigate = useNavigate();

  return (
    <div className="header-container">
      <FaHome onClick={() => navigate('/')} />
      <div className="categories-container">
        {categories.map((item) => (
          <Link className="nav-link" to={`/category/${item}`} key={item}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
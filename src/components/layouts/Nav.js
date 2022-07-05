import { Link } from 'react-router-dom';
import '../../css/Navigation.css';

const Navigation = () => (
  <header>
    <nav className="nav">
      <div className="logo Flex-1">
        <Link to="home">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Math Magician" />
        </Link>
      </div>
      <ul className="navLinks Flex-2">
        <li className="linkItems">
          <Link to="home">Home</Link>
        </li>
        <li className="linkItems">
          <Link to="calculator">Calculator</Link>
        </li>
        <li className="linkItems">
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;

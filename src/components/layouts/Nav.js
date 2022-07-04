import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <ul className="NavLinks">
        <li className="LinkItems">
          <Link to="home">Home</Link>
          <Link to="calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;

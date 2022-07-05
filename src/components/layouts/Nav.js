import { Link } from 'react-router-dom';
import Styles from '../../css/Navigation.module.css';

const Navigation = () => (
  <header>
    <nav className={Styles.nav}>
      <div className={`${Styles.logo} Flex-1`}>
        <Link to="home"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Math Magician" /></Link>
      </div>
      <ul className={`${Styles.navLinks} Flex-2`}>
        <li className={Styles.linkItems}>
          <Link to="home">Home</Link>
        </li>
        <li className={Styles.linkItems}>
          <Link to="calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;

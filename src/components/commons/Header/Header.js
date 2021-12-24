import logo from './logo.png'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return <header>
        <div>
            <Link to="/">
                <img className='Logo' src={logo} alt='logo' />
            </Link>
        </div>
        <div>
            <ul className='navgation'>
                <li>
                    <Link to="/">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/Profil">
                        Profil
                    </Link>
                </li>
                <li>
                    <Link to="/Réglage">
                        Réglage
                    </Link>
                </li>
                <li>
                    <Link to="/Communauté">
                        Communauté
                    </Link>
                </li>
            </ul>
        </div>
    </header>

}
export default Header;
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <Link to='/'>Accueil</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
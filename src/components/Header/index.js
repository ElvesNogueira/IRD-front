import './header.css';
import { Link} from 'react-router-dom'


function Header(){
    return (
        <header>
           <Link className='logo' to="/">IRD-DOM</Link>


        </header>
    );
}

export default Header;
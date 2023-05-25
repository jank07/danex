import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
        <h1>Danex</h1>
        <ul>
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/onas">O nas</Link></li>
            <li><Link>Kontakt</Link></li>
            <div className="theme-button-container">
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="button"></label>
            </div>
      </ul>
    </nav>
    )
}
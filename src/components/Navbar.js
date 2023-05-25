export default function Navbar() {
    return (
        <nav>
        <h1>Danex</h1>
        <ul>
            <li><a>Strona główna</a></li>
            <li><a>O nas</a></li>
            <li><a>Kontakt</a></li>
            <div className="theme-button-container">
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="button"></label>
            </div>
      </ul>
    </nav>
    )
}
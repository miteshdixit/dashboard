import { useEffect, useState } from "react";
import { GoSun, GoMoon } from "react-icons/go";
import "../App.css";

function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);

  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{zIndex: "99999", width: "100%" , height:"5rem"}}>
        <div className="container-fluid" >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link " aria-current="page" to="/">Home</span>
              </li>
             </ul>
             
            <button className="btn ms-2" onClick={toggleTheme}>
              {theme === 'light' ? <GoMoon style={{ fontSize: '24px' }}/> : <GoSun style={{ fontSize: '24px' }}/>}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

const _className = "navBar";
const _id = "navBar"

import fresuchisLogo from "../assets/fresuchisLogo.svg";

function NavBar() {
    return (
        <nav id={_id}>
            <ul className={_className + " glass"}>
                <li>
                    <img 
                    src={fresuchisLogo}
                    alt="Fresuchis Logo" 
                    className="navLogo" 
                    />
                </li>

                <li>
                    <a
                        href="#servicesSection"
                        onClick={(e) => {
                        e.preventDefault(); // evita que cambie la URL
                        document.getElementById("servicesSection").scrollIntoView({ behavior: "smooth" });
                    }}> Servicios </a>      
                </li>
                
                <li>
                    <a
                        href="#contactSection"
                        className="navBarCTA"
                        onClick={(e) => {
                        e.preventDefault(); // evita que cambie la URL
                        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
                    }}> Redes sociales </a>      
                </li>

            </ul>
        </nav>
    )
}

export default NavBar;
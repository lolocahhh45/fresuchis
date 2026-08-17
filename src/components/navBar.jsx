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
                        href="#heroSection"
                        onClick={(e) => {
                        e.preventDefault(); // evita que cambie la URL
                        document.getElementById("heroSection").scrollIntoView({ behavior: "smooth" });
                    }}> Inicio </a>          
                </li>


            </ul>
        </nav>
    )
}

export default NavBar;
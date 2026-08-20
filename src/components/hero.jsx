import ceo from "../assets/ceo.png";

const _className = "heroSection";
const _id = "heroSection";

function HeroSection() {
    return (
        <section id={_id} className={_className + " container"}>
            <div className="heroInner glass rounded">
                <img 
                    src={ceo}
                    alt="Fresuchis Logo" 
                    className="heroLogo" 
                />

                <div className="heroContent">
                    <h1 className="heroTitle textShadow">FRESUCHIS</h1>
                    <p className="heroSubtitle textShadow">Programa CEAFIT</p>
                    <p className="heroDesc textShadow">CEAFIT Sesiones de masajes, entrenamientos individuales tanto como grupales, entrenadora profesional y grandes avances garantizados.</p>
                    <a href="#ceafit" className="heroCTA textShadow"
                    onClick={(e) => {
                        e.preventDefault(); // evita que cambie la URL
                        document.getElementById("contactSection").scrollIntoView({ behavior: "smooth" });
                    }}>Contactanos</a>

                </div>
                
            </div>
        </section>
    )
}

export default HeroSection;
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

                <div className="heroText">
                    

                    <h1 className="heroTitle">FRESUCHIS</h1>
                    <p className="heroSubtitle">Programa CEAFIT</p>
                    <p className="heroDesc">CEAFIT Sesiones de masajes, entrenamientos individuales tanto como grupales, entrenadora profesional y grandes avances garantizados.</p>
                    <a href="#ceafit" className="heroCTA">Conoce CEAFIT</a>
                </div>
                
            </div>
        </section>
    )
}

export default HeroSection;
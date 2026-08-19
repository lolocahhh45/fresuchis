import { useEffect, useState, useRef } from "react";

const _className = "testimonialsSection";
const _id = "testimonialsSection";

const TESTIMONIALS = [
    {
        name: "María López",
        role: "Entrenada, CEAFIT",
        text: "Los planes de entrenamiento de CEAFIT cambiaron mi energía: más fuerza, menos grasa y mejor postura. El equipo de Fresuchis me guió todo el mes.",
    },
    {
        name: "Carlos Medina",
        role: "Cliente - Masajes Reductores",
        text: "Tras 10 sesiones noté reducción real y menos dolor lumbar. El protocolo nutricional complementó todo — excelente servicio.",
    },
    {
        name: "Ana Pérez",
        role: "Participante CEAFIT",
        text: "Combiné las sesiones con ejercicios quema grasa y vi resultados en 4 semanas. Me siento con más confianza y energía para el día a día.",
    },
];

function Testimonials() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 12000;

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, delay);
        return () => {
            resetTimeout();
        };
    }, [index]);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    return (
        <section id={_id} className={_className + " container"}>
            <div className="glass rounded testimonialsInner">
                <h1 className="testimonialsTitle textShadow">Testimonios</h1>

                <div
                    className="carousel"
                    onMouseEnter={resetTimeout}
                    onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => setIndex((prev) => (prev + 1) % TESTIMONIALS.length), delay);
                    }}
                >
                    <div className="carouselTrack" style={{ transform: `translateX(calc(${ -index } * (100% + 1rem)))` }}>
                        {TESTIMONIALS.map((t, i) => (
                            <article className="testimonialCard rounded" key={i} aria-hidden={i !== index}>
                                <div className="testimonialAvatar">{t.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
                                <div className="testimonialContent">
                                    <p className="testimonialAuthor">{t.name}</p>
                                    <p className="testimonialText">"{t.text}"</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="carouselControls">
                        <button className="carouselBtn" onClick={() => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Anterior">‹</button>
                        <div className="indicators">
                            {TESTIMONIALS.map((_, i) => (
                                <button key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)} aria-label={`Ir al testimonio ${i+1}`}></button>
                            ))}
                        </div>
                        <button className="carouselBtn" onClick={() => setIndex((index + 1) % TESTIMONIALS.length)} aria-label="Siguiente">›</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
const _className = "aboutSection";
const _id = "aboutSection";

function AboutSection() {
    return (
        <section id={_id} className={_className + " container"}>
            <div className="innerAbout glass rounded">
                <h1 className="aboutTitle">
                    Que somos?
                </h1>

                <h2 className="aboutText">
                    En CEA FIT creemos que el bienestar se construye paso a paso. Nuestro método se basa en tres pilares:
                </h2>
                <ul className="aboutList">

                    <li>
                        Claridad: te ayudamos a definir metas claras y alcanzables.
                    </li>

                    <li>
                        Energía: potenciamos tu motivación y disciplina para mantenerte constante.
                    </li>

                    <li>
                         Acción: transformamos las ideas en resultados prácticos y visibles.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutSection;
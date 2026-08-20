const _id = "servicesSection";

import ServiceMassage from "./props/serviceMassage";
import ServicePlan from "./props/servicePlans";
import useModal from "./props/useModal";

import dumbell from "../assets/dumbell2.png";

import relaxingMassage from "../assets/relajante.png"
import descontracturante from "../assets/Descontracturante.png"
import descarga from "../assets/descarga.png"
import pies from "../assets/pies.png"
import reductor from "../assets/reductor.png"


function Services() {
    const { openModal } = useModal();

    return (
        <section id={_id} className={" container"}>
            <div className="innerServices glass rounded">
                <h1 className="servicesTitle textShadow">
                    Servicios
                </h1>

                <div className="servicesList">

                    <div className="servicesGroup">
                        <h2 className="servicesText textShadow">
                            Planes de entrenamiento
                        </h2>

                        <div className="servicesCards">
                            <ServicePlan
                                icon={dumbell}
                                title="DOS DIAS"
                                description="POR SEMANA"
                                price="$2000 RD MENSUAL"
                                colorClass="commonColor"
                            />

                            <ServicePlan
                                icon={dumbell}
                                title="TRES DIAS"
                                description="POR SEMANA"
                                price="$3000 RD MENSUAL"
                                colorClass="specialColor"
                            />

                        </div>
                    </div>
                    

                    <div className="servicesGroup">
                        <h2 className="servicesText textShadow">
                            Masajes
                        </h2>

                        <div className="servicesCards">
                            <ServiceMassage 
                                icon={relaxingMassage}
                                title="Relajante"
                                description="Alivia el estres, promueve el bienestar y genera profunda sensacion de calma"
                                price="$1500 RD"
                                colorClass="massageColor"
                            />


                            <ServiceMassage 
                                icon={descontracturante}
                                title="Descontracturante"
                                description="Masaje que ayuda a liberar la tension muscular, alivia contracturas y mejora la movilidad."
                                price="$2000 RD"
                                colorClass="massageColor"
                            />

                            <ServiceMassage 
                                icon={descarga}
                                title="Descarga"
                                description="Masaje enfocado en liberar la tension acumulada en zonas especificas aportando alivio y bienestar muscular."
                                price="$2500 RD"
                                colorClass="massageColor"
                            />

                            <ServiceMassage 
                                icon={pies}
                                title="Masaje de pies"
                                description="Masaje que estimula puntos reflejos, mejora la circulacion y proporciona relajacion total."
                                price="$800 RD"
                                colorClass="massageColor"
                            />

                            <ServiceMassage 
                                icon={reductor}
                                title="Reductor"
                                description="1 Sesion segun area: brazos, espalda, piernas, abdomen, etc."
                                price="$1500 RD"
                                colorClass="massageColor"
                            />
                        </div>
                    </div>

                    <div className="servicesGroup">
                        <h2 className="servicesText textShadow">
                            Ofertas especiales y combos
                        </h2>
                        <div className="servicesCards">
                            <ServiceMassage 
                                icon={reductor}
                                title="Planes Reductores"
                                description="Presiona para mas informacion!"
                                price="$1500-$14000 RD" // $1̶5̶,̶0̶0̶0 > $3500 RD
                                colorClass="offerColor"
                                onClick={() => openModal(
                                <>
                                    <h2 className="textShadow">Planes Reductores</h2>
                                    <ul className="textShadow">
                                        <li>1 sesión $1,500 RD</li>
                                        <li>5 sesiones $6,000 RD</li>
                                        <li>10 sesiones $9000 RD</li>
                                        <li>15 sesiones $12,000 RD</li>
                                        <li>20 sesiones $14,000 RD</li>
                                    </ul>
                                    {/* <p className="textShadow"><strong>Precio:</strong> 3500 Pesos dominicanos</p>
                                    <p className="textShadow">Todo incluido Durante una duración de un mes!</p> */}
                                </>
                            )}
                         />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
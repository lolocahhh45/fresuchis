const _id = "servicesSection";

import dumbell2 from "../assets/dumbell2.png";

function Services() {
    return (
        <section id={_id} className={" container"}>
            <div className="innerAbout glass rounded">
                <h1 className="servicesTitle">
                    Servicios
                </h1>

                <div className="servicesList">
                    <div>
                        <h1 className="servicesText">
                            Planes de entrenamiento
                        </h1>

                        <div className="servicesCards">
                        

                        <div className="serviceCard">

                            <div className="serviceCardLeftSide commonColor">
                                <img 
                                src={dumbell2}
                                alt="Fresuchis Logo" 
                                className="navLogo" 
                                />
                            </div>

                            <div className="serviceCardRightSide">
                                <h1 className="serviveCardTitle">DOS DIAS</h1>
                                <h3 className="serviceCardText serviceSeparationBottom">POR SEMANA</h3>
                                
                                <h3 className="serviceCardText ">$2000 RD MENSUAL</h3>
                            </div>

                        </div>

                        <div className="serviceCard">

                            <div className="serviceCardLeftSide specialColor">
                                <img 
                                src={dumbell2}
                                alt="Fresuchis Logo" 
                                className="navLogo" 
                                />
                            </div>

                            <div className="serviceCardRightSide">
                                <h1 className="serviveCardTitle">TRES DIAS</h1>
                                <h3 className="serviceCardText serviceSeparationBottom">POR SEMANA</h3>
                                
                                <h3 className="serviceCardText ">$3000 RD MENSUAL</h3>
                            </div>

                        </div>
                    </div>
                    </div>
                    

                    <div>
                        <h1 className="servicesText">
                            Masajes
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
import instagramLogo from "../assets/instagram.png"
import whatsappLogo from "../assets/whatsapp.png"

function Contact() {
  return (
    <section id="contactSection" className="contactSection container">
      <div className="glass rounded contactInner">
        <h2 className="contactTitle textShadow">Contáctanos</h2>
        <ul className="contactList">
          <li className="contactItem">
            <a className="contactLink textShadow" href="https://wa.me/8291231234" target="_blank" rel="noreferrer">
              <img src={whatsappLogo} alt="WhatsApp" className="contactImg" />
              <span>829-123-1234</span>
            </a>
          </li>
          <li className="contactItem textShadow"><span>📩 Correo:</span> <a className="contactLink " href="mailto:fresuchis.example@gmail.com" style={{ textDecoration: "none" }}> fresuchis.example@gmail.com</a></li>
          <li className="contactItem">
            <a className="contactLink textShadow" href="https://instagram.com/fresuchis" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <img src={instagramLogo} alt="Instagram" className="contactImg" />
              <span>@fresuchis</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;

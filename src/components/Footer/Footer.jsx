import { Link } from "react-router-dom";
import "./Footer.css";
import twitter from "../assets/Icons/twitter.png";
import facebook from "../assets/Icons/facebook.png";
import instagram from "../assets/Icons/instagram.png";

function Footer({ nosotros, contacto, preguntas }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Acerca de Residuo Creativo</h4>
            <Link
              to="/ResiduoCreativo/nosotros"
              style={{ textDecoration: "none" }}
              className="a"
            >
              {nosotros}
            </Link>
          </div>
          <div className="sb__footer-links-div">
            <h4>¿Necesitas ayuda?</h4>

            <Link
              to="/ResiduoCreativo/contacto"
              style={{ textDecoration: "none" }}
              className="a"
            >
              {contacto}
            </Link>

            <Link
              to="/ResiduoCreativo/preguntas-frecuentes"
              style={{ textDecoration: "none" }}
              className="a"
            >
              {preguntas}
            </Link>
          </div>
          <div className="sb__footer-links-div">
            <h4>Medios de pago</h4>

            <Link
              to="/ResiduoCreativo/pagos"
              style={{ textDecoration: "none" }}
              className="a"
            >
              <p>Revisa los medios de pago disponibles</p>
            </Link>
          </div>
          <div className="sb__footer-links-div">
            <h4>Nuestras Redes Sociales</h4>
            <div className="social">
              <p>
                <img src={facebook} alt="Facebook" />
              </p>
              <p>
                <img src={instagram} alt="Instagram" />
              </p>
              <p>
                <img src={twitter} alt="Twitter" />
              </p>
            </div>
          </div>
        </div>

        <div className="sb__footer__abajo">
          <div className="sb__footer__copyright">
            <p>&copy; {currentYear} Residuo Creativo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

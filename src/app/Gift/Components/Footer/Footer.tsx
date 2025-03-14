import styled from "styled-components";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: 50px;

  .footer-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .social-icons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .social-icons a {
    color: white;
    font-size: 20px;
    transition: 0.3s ease;
  }

  .social-icons a:hover {
    color: #ffcc00;
  }

  p {
    font-size: 14px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        <p>✨ Gracias por ser parte de nuestra historia ✨</p>
        <p>Si tienes dudas o necesitas ayuda, contáctanos:</p>
        <div className="social-icons">
          <a href="https://wa.me/982279718" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="carlostuna015@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Carlos & Carolina. Todos los derechos reservados.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;

import "./footer.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare /> &nbsp;
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram /> &nbsp;
            </a>
            <a href="https://www.x.com/" target="_blank">
              <FaXTwitter />
            </a>
          </div>
          <p>
            Copyright © {currentYear} Avocado - All rights reserved &nbsp; |
            &nbsp;
            <span>About us</span> &nbsp; | &nbsp;
            <span> Terms and Conditions</span> &nbsp; | &nbsp;
            <span>Cookie Policy</span> &nbsp; | &nbsp;
            <span>Privacy Policy</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

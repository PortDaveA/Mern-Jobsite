import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a team of passionate developers who are building the future of the web. We believe that everyone should have access to high-quality software, regardless of their budget.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </li>
            <li>
              <a href="tel:1-800-555-1212">1-800-555-1212</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <div className="social-media-icons">
            <a href="https://twitter.com/example">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://facebook.com/example">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com/example">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/example">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023 Example Company. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer-column {
    width: 25%;
    padding: 0 20px;

    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  .social-media-icons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
      color: #fff;
      font-size: 20px;
      margin: 0 5px;
      transition: font-size 0.2s ease-in-out;
    }

    @media (max-width: 768px) {
      a {
        font-size: 16px;
      }
    }
  }

  .footer-copyright {
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
    }

    .footer-column {
      width: 100%;
    }
  }
`;

export default footer;

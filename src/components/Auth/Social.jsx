import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div class="social-container center">
      <p>---------------------------- Or continue with ------------------------------</p>
      <a
        href="https://accounts.google.com/login"
        className="google social"
      >
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
      <a
        href="https://en-gb.facebook.com/login/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://twitter.com/login?lang=en"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}

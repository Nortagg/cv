import ContactItem from "./contact.item";
import "./contact.styles.scss";
import { SiGmail } from "react-icons/si";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
export default function ContactPage() {
  return (
    <div className="contact-card">
      <div className="contact-title">Contact</div>
      <div className="grid-wraper">
        <ContactItem
          name="phone"
          text=" +381 61 6652 987"
          icon={<AiOutlinePhone />}
        />
        <ContactItem
          name="email"
          text="lezaicnikola10@gmail.com"
          icon={<SiGmail />}
          link="mailto:lezaicnikola10@gmail.com"
        />
        <ContactItem
          name="instagram"
          text="lezaic_n"
          icon={<AiOutlineInstagram />}
          link="https://www.instagram.com/lezaic_n/"
        />
        <ContactItem
          name="github"
          text="Nortagg"
          icon={<AiOutlineGithub />}
          link="https://github.com/Nortagg"
        />
      </div>
    </div>
  );
}

import "./container-right.styles.scss";
import { IoSchoolOutline, IoLaptopOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

export default function HomeRight() {
  return (
    <div className="card-right">
      <div className="pp-container">
        <h3>PERSONAL PROFILE</h3>
      </div>
      <div className="me-icon">
        <FcAbout />
      </div>
      <p className="pp-text">
        Accustomed to handling IT support, managing IT projects, and supporting
        various engineering departments with IT tools and applications.
      </p>

      <div className="we-container">
        <h3>WORK EXPERIENCE</h3>
      </div>
      <div className="work-icon">
        {" "}
        <MdWorkOutline />{" "}
      </div>
      <p className="date-we1">July 2019 - January 2021</p>
      <ul className="we-text1">
        <li>Professional soldier at Serbian army, Prokuplje.</li>
        <li>
          Progressed from rank Razvodnik (Distributor) to rank Desetar
          (Corporal) and achieved very good results in the formation position.
        </li>
      </ul>
      <p className="date-we2">August 2021 - March 2022</p>
      <ul className="we-text2">
        <li>Help Desk Representative Level 1 and 2 at NCR, Belgrade</li>
        <li>
          Worked with on-site Walmart employees to resolve issues with non point
          of sale software and hardware. Also worked with on-site technicians
          and Walmart pharmacy employees to resolve software and hardware issues
          in pharmacy.
        </li>
      </ul>
      <div className="eh-container">
        <h3>EDUCATION HISTORY</h3>
      </div>
      <div className="school-icon">
        <IoSchoolOutline />
      </div>
      <ul className="eh-text">
        <li>Tehnička škola ‘Prota Stevan Dimitrijević’, Aleksinac </li>
        <li>Computer electrician, IV degree | 2014 – 2018</li>
      </ul>
      <div className="am-container">
        <h3>ABOUT ME</h3>
      </div>
      <div className="laptop-icon">
        <IoLaptopOutline />
      </div>
      <ul className="am-text">
        <li>
          I have always been around computers. At first i only used the computer
          to play games, watch movies, etc. but in the later period of my life i
          became more and more interested in hardware and software. So i decided
          to learn more about computers and other 21st century technologies.
        </li>
      </ul>
    </div>
  );
}

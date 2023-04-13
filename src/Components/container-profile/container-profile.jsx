import "./container-profile.styles.scss";
import { IoSchoolOutline, IoLaptopOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export default function CardProfile() {
  return (
    <div className="card-profile">
      <div className="profile-title">Profile</div>
      <div className="main-wrapper">
        <div className="profile-left">
          <h3 className="personal-profile-container">
            PERSONAL PROFILE{" "}
            <div className="personal-profile-icon">
              <BsPerson />
            </div>
          </h3>
          <p className="personal-profile-text">
            Accustomed to handling IT support, managing IT projects, and
            supporting various engineering departments with IT tools and
            applications.
          </p>
          <h3 className="work-experience-container">
            WORK EXPERIENCE{" "}
            <div className="work-experience-icon">
              <MdWorkOutline />
            </div>
          </h3>
          <p className="date-one">July 2019 - January 2021</p>
          <ul className="work-experience-text-first">
            <li>
              I served as a professional soldier in the Serbian Army, stationed
              in Prokuplje.
            </li>
            <li>
              During my tenure, I was promoted from the rank of Razvodnik
              (Distributor) to Desetar (Corporal), and consistently achieved
              outstanding results in my formation position.
            </li>
          </ul>
          <p className="date-two">August 2021 - March 2022</p>
          <ul className="work-experience-text-second">
            <li>Help Desk Representative Level 1 and 2 at NCR, Belgrade</li>
            <li>
              Collaborated with on-site Walmart employees to effectively
              troubleshoot and resolve issues related to non-point of sale
              software and hardware. Additionally, worked closely with on-site
              technicians and Walmart pharmacy employees to address and resolve
              software and hardware issues specific to the pharmacy.
            </li>
          </ul>
        </div>
        <div className="profile-right">
          <h3 className="education-history-container">
            EDUCATION HISTORY{" "}
            <div className="education-history-icon">
              <IoSchoolOutline />
            </div>
          </h3>
          <ul className="education-history-text-first">
            <li>Tehnička škola ‘Prota Stevan Dimitrijević’, Aleksinac </li>
            <li>Computer electrician, IV degree | 2014 – 2018</li>
          </ul>
          <h3 className="about-me-container">
            ABOUT ME{" "}
            <div className="about-me-icon">
              <IoLaptopOutline />
            </div>
          </h3>
          <ul className="about-me-text-first">
            <li>
              From a young age, I was exposed to the world of computers and
              technology. Initially, I used computers primarily for
              entertainment purposes, such as playing games and watching movies.
              However, as I grew older, my interest in hardware and software
              deepened. Consequently, I made a conscious decision to expand my
              knowledge of computers and other emerging 21st-century
              technologies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Envelope from "./Envelope";
import Curriculum from "./Curriculum";
import About from "./About";
import Mug from "./Mug";
import { useState } from "react";
import { useNavigate } from "react-router";
import computer from "../img/computer.jpg";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const headref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }, []);
  const navigate = useNavigate();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const onProjNav = () => {
    const timer = setTimeout(() => {
      navigate("/projects");
    }, 1000);
    gsap.fromTo(
      headref.current,
      {
        transform: "rotateX(0)",
      },
      {
        transform: "rotateX(90deg)",
        opacity: 0,
        rotateX: 30,
        y: 500,
      }
    );
    return () => clearTimeout(timer);
  };

  return (
    <div className="header" ref={headref}>
      <div className="header__content">
        <h2 className="header__main-title">Maria Sidko portfolio</h2>
        <div className="header__mug">
          <Mug />
        </div>
        <div className="header__about">
          <About open={isAboutOpen} setOpen={setIsAboutOpen} />
        </div>

        <div className="header__curri">
          <Curriculum />
        </div>

        <div className="header__env">
          <Envelope />
        </div>

        <div className="header__container">
          <div className="header__projects" onClick={onProjNav}>
            <img
              className="header__projects__img"
              src={computer}
              alt="computer"
            />
          </div>
          <div className="header__projects__text" onClick={onProjNav}>
            Voir mon travail
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

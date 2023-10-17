import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Menu({ titles }) {
  const menuref = useRef(null);
  const transitionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      transitionRef.current,
      {
        opacity: 1,

        top: 0,
        zIndex: 30,
      },
      {
        opacity: 0,

        zIndex: -30,
      }
    );
    tl.fromTo(
      transitionRef.current,
      {
        top: 0,
      },
      {
        top: " 159rem",
      }
    );
  }, []);

  const onNavigate = (path) => {
    const timer = setTimeout(() => {
      navigate(path);
    }, 1000);
    gsap.fromTo(
      transitionRef.current,
      {
        opacity: 0,
        top: 0,
        right: 0,
      },
      {
        opacity: 1,
        zIndex: 30,
      }
    );
    return () => clearTimeout(timer);
  };

  const content = titles.map((title) => (
    <div className="menu__item" onClick={() => onNavigate(title.route)}>
      <div className="menu__switch">
        <div className="menu__switch__circle">
          <div className="menu__switch__hole">
            <div className="menu__switch__tip"></div>
          </div>
        </div>
      </div>
      <div className="menu__title">{title.title}</div>
    </div>
  ));
  return (
    <div className="menu" ref={menuref}>
      <div className="menu__transition" ref={transitionRef}></div>
      <div className="menu__container">{content}</div>
    </div>
  );
}
export default Menu;

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function Radio() {
  const [navi, setNavi] = useState("/");
  const navigate = useNavigate();
  const indicatorRef = useRef(null);
  const transitionRef = useRef(null);

  const onHover = (num) => {
    console.log("on hover", num);
    if (num === 1) {
      gsap.to(indicatorRef.current, {
        transform: "rotate(-45deg)",
      });
    }

    if (num === 2) {
      gsap.to(indicatorRef.current, {
        transform: "rotate(0)",
      });
    }
    if (num === 3) {
      gsap.to(indicatorRef.current, {
        transform: "rotate(45deg)",
      });
    }
  };
  useEffect(() => {
    if (navi === "/about") {
      const timer = setTimeout(() => {
        navigate("/about");
      }, 1000);
      gsap.fromTo(
        transitionRef.current,
        {
          opacity: 0,
          right: 0,
        },
        {
          opacity: 1,
          zIndex: 30,
        }
      );
      return () => clearTimeout(timer);
    }
    if (navi === "/curriculum") {
      const timer = setTimeout(() => {
        navigate("/curriculum");
      }, 1000);
      gsap.fromTo(
        transitionRef.current,
        {
          opacity: 0,
          right: 0,
        },
        {
          opacity: 1,
          zIndex: 30,
        }
      );
      return () => clearTimeout(timer);
    }
    if (navi === "/projects") {
      const timer = setTimeout(() => {
        navigate("/projects");
      }, 1000);
      gsap.fromTo(
        transitionRef.current,
        {
          opacity: 0,
          right: 0,
        },
        {
          opacity: 1,
          zIndex: 30,
        }
      );
      return () => clearTimeout(timer);
    }
  }, [navi]);
  return (
    <div className="radio">
      <div className="radio__transition" ref={transitionRef}></div>
      <div className="form">
        <div className="header__name">Maria Sidko</div>
        <div className="header__title">Front end web developer</div>
        <div className="form__content">
          <div className="form__border">
            <div className="form__numbers">
              <div className="form__numbers__num form__numbers__num--1">
                <div className="form__numbers__num__text">1</div>
              </div>
              <div className="form__numbers__num form__numbers__num--2">
                <div className="form__numbers__num__text">2</div>
              </div>
              <div className="form__numbers__num form__numbers__num--3">
                <div className="form__numbers__num__text">3</div>
              </div>
              <div className="form__indicator" ref={indicatorRef}></div>
              <div className="form__center">
                <div className="form__center__border">
                  <div className="form__center__inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="labels">
        <div
          className="labels__label"
          onMouseEnter={() => onHover(1)}
          onClick={() => setNavi("/about")}
        >
          <span className="labels__bullet"></span>1 - A propos
        </div>
        <div
          className="labels__label"
          onMouseEnter={() => onHover(2)}
          onClick={() => setNavi("/curriculum")}
        >
          {" "}
          <span className="labels__bullet"></span>2 - Curriculum Vitae
        </div>
        <div
          className="labels__label"
          onMouseEnter={() => onHover(3)}
          onClick={() => setNavi("/projects")}
        >
          <span className="labels__bullet"></span>3 - Projets
        </div>
      </div>
      {/* </div> */}
      <div className="header__sound"></div>
    </div>
  );
}
export default Radio;

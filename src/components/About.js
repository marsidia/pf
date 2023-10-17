import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import pic from "../SIDKO_CV_photo2.jpg";
import Menu from "./Menu";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const contref = useRef(null);
  const titleref = useRef(null);
  const imgref = useRef(null);
  const albumRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: contref.current,
        markers: true,
        start: "top top",
        end: "bottom bottom",

        scrub: 1,
        // pin: el,
        // pinSpacing: true,
      },
    });
    tl.fromTo(
      albumRef.current,
      {
        transform: "scale(.7)  rotate(-17deg) ",
        zIndex: 10,
      },
      {
        transform: "scale(1)  ",
      }
    );
  }, []);

  return (
    <div className="about" ref={contref}>
      <Menu
        titles={[
          { title: "Contat", route: "/" },
          { title: "Curriculum Vitae", route: "/curriculum" },
          { title: "Projets", route: "/projects" },
        ]}
      />
      <div className="about__border" ref={albumRef}>
        <div className="about__container">
          <div className="about__title__container">
            <h2 ref={titleref} className="about__title">
              A propos de moi
            </h2>
          </div>

          <div className="about__content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem praesentium quos ea porro? Maiores minus illum,
              possimus tempore debitis repellat vel aliquam rerum mollitia eos
              ut, qui pariatur. Mollitia, consectetur ab. Dolores cumque
              expedita numquam itaque nostrum dolor fugit iste, provident est
              repudiandae sequi delectus ipsam tenetur pariatur facere
              exercitationem?
            </p>
            <div className="about__img-container" ref={imgref}>
              <div className="about__img__border">
                <img className="about__img" src={pic} alt="me" />
              </div>
            </div>
          </div>
        </div>
        <div className="about__filler__border">
          <div className="about__filler"></div>
        </div>
      </div>
    </div>
  );
}
export default About;

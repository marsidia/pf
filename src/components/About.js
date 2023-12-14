import {  useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import pic from "../img/SIDKO_CV_photo2.jpg";
import useAutoClose from "../hooks/use-auto-close";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const contref = useRef(null);
  const titleref = useRef(null);
  const imgref = useRef(null);
  const albumRef = useRef(null);
  const fillref = useRef(null);
  const { isOpen, setIsOpen, divEl } = useAutoClose();



  const className = isOpen ? "about__st active" : "about__st";

  return (
    <div className="about" ref={contref}>
      <div className="about__text" onClick={setIsOpen}>
        Apprendre à me connaître
      </div>

      <div className={className} ref={divEl} onClick={setIsOpen}>
        <div className="about__border" ref={albumRef}>
          <div className="about__container">
            <div className="about__title__container">
              <h2 ref={titleref} className="about__title">
                A propos de moi
              </h2>
            </div>

            <div className="about__content">
              <p>
                Je suis un développeur front-end autodidacte passionné par la
                création d'expériences web exceptionnelles. Mon expertise en
                HTML, CSS, JavaScript et les frameworks populaires garantit des
                solutions de qualité. Je m'efforce constamment d'associer
                créativité et fonctionnalité pour offrir des sites web
                exceptionnels. Mon objectif est de transformer des idées en
                réalité numérique tout en accordant une attention particulière à
                l'accessibilité web et à la performance. Si vous recherchez un
                développeur dévoué, créatif et compétent pour votre prochain
                projet, je suis prêt à collaborer. Contactez-moi pour discuter
                de vos besoins en développement front-end.
              </p>
              <div className="about__img-container" ref={imgref}>
                <div className="about__img__border">
                  <img className="about__img" src={pic} alt="me" />
                </div>
              </div>
            </div>
          </div>
          <div className="about__filler__border" ref={fillref}>
            <div className="about__filler">
              <div className="about__filler__text">Maria Sidko</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

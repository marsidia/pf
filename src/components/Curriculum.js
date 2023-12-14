import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Experience from "./Experience";
import Formations from "./Formations";
import Education from "./Education";
import Langues from "./Langues";
import Hobbies from "./Hobbies";
import useAutoClose from "../hooks/use-auto-close";
gsap.registerPlugin(ScrollTrigger);

function Curriculum() {
  const { isOpen, setIsOpen, divEl } = useAutoClose();
  const className = isOpen ? "curri__content active" : "curri__content";
  return (
    <div className="curri__container">
      <div className="curri__text" onClick={setIsOpen}>
        Voir mon parcours
      </div>

      <div className={className} onClick={setIsOpen} ref={divEl}>
        <div className="curri">
          <div className="curri__title">
            <h4 className="curri__title__text">Curriculum vitae</h4>
          </div>
          <div className="curri__card--ex">
            <Experience />
          </div>
          <div className="curri__card--ed">
            <Education />
          </div>
          <div className="curri__card--fo">
            <Formations />
          </div>
          <div className="curri__card--lg">
            <Langues />
          </div>
          <div className="curri__card--ci">
            <Hobbies />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Curriculum;

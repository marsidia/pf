import timbre from "../img/timbre.png";
import stamp from "../img/stamp.png";
import useAutoClose from "../hooks/use-auto-close";

function Envelope() {
  const { isOpen, setIsOpen, divEl } = useAutoClose();

  const className = isOpen ? "env active" : "env";
  return (
    <div className="env__container">
      <div className="env__text" onClick={setIsOpen}>
        Me contacter
      </div>

      <div className={className} ref={divEl} onClick={setIsOpen}>
        <div className="env__side env__side--1">
          <div className="env__stamps">
            <img src={timbre} alt="" className="env__timbre" />
            <img src={stamp} alt="" className="env__stamp" />
          </div>
          <div className="env__info">
            <div className="env__info__name env__info__item">Maria Sidko</div>
            <div className="env__info__position env__info__item">
              Front end web developer
            </div>
    
          </div>
        </div>
        <div className="env__side env__side--2">
          <div className="env__side--2__opening"></div>{" "}
          <div className="env__side--2__inside">
            <div className="env__side--2__letter">
              <div className="env__side--2__letter__text">
                <strong> Contactez-moi</strong>
                <br />
                Mon numéro de téléphone :{" "}
                <a href="tel:+33663437881">06 63 43 78 81</a>
                <br />
                Mon email :{" "}
                <a href="mailto: sidkomaria@outlook.com">
                  sidkomaria@outlook.com
                </a>
                <br />
                Ma page <a href="https://github.com/marsidia">Github</a>
                <br />
                Mon profil{" "}
                <a href="https://fr.linkedin.com/in/maria-sidko-191408233">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Envelope;

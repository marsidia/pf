import earth from "../img/earth.png";
function Langues() {
  return (
    <div className="lan">
      <div className="lan__title">Langues</div>

      <div className="lan__items">
        <div className="lan__group">
          <div className="lan__item">
            <div className="lan__item__date">Francais</div>
            <div className="lan__item__position">C2</div>
          </div>
          <div className="lan__item">
            <div className="lan__item__date">Russe</div>

            <div className="lan__item__position">C2</div>
          </div>
        </div>

        <img className="lan__img" src={earth} alt="earth"></img>
        <div className="lan__group">
          <div className="lan__item">
            <div className="lan__item__date">Anglais</div>

            <div className="lan__item__position">C1-C2</div>
          </div>
          <div className="lan__item">
            <div className="lan__item__date">Espagnol</div>
            <div className="lan__item__position">B1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Langues;

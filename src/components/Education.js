import hat from "../hat.png";

function Education() {
  const data = [
    {
      date: "2020 - 2022",
      position: "Master 1 Informatique (Science et Technologie du Logiciel)",
      description: `Sorbonne Université`,
    },
    {
      date: "2017 - 2020",
      position: "Double licence Mathématiques et Informatique",
      description: `Sorbonne Université`,
    },
    {
      date: "2017",
      position: "Baccalauréat Général Scientifique",
      description: `Lycée Saint Michel de Picpus`,
    },
  ];

  const items = data.map((item) => {
    return (
      <div className="edu__item">
        {/* <img className="edu__img" src={hat} alt="hat"></img> */}

        <div className="edu__desc-container">
          <div className="edu__item__date">{item.date}</div>

          <div className="edu__item__position">{item.position}</div>
        </div>
        <div className="edu__item__description">{item.description}</div>
      </div>
    );
  });
  return (
    <div className="edu">
      <div className="edu__title">Education</div>
      <img className="edu__img" src={hat} alt="hat"></img>
      <div className="edu__items"> {items}</div>
    </div>
    // <a href="https://www.vecteezy.com/free-vector/vintage-camera">Vintage Camera Vectors by Vecteezy</a>
  );
}

export default Education;

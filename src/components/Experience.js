import books from "../books2.png"
function Experience() {
    const data = 
    [
        {
            date: '2022 - 5 mois',
            position: 'Animation alteliers numeriques à l\'association Kocoya',
            description: ` Enseignement auprès de petits groupes de personnes agées ou de demandeurs d'emploi au sujet de l'utilisation d'appareils numériques et des nouvelles technologies`

        },
        {
            date: '2021 - 1 mois',
            position: 'Freelance développement mobile',
            description: ` Développement de l’application mobile pour la gestion des rapports du temps passé à base de technologie React Native `

        },
        {
            date: '2020 - 1 mois',
            position: 'Freelance développement informatique et traitement de données',
            description: `Récupération de contenu des sites Web, transcription de contenu vidéo et PDF, analyse sémantique et classification automatisée de contenus, application des algorithmes de machine learning`

        },
    ]

    const items = data.map((item) => {
        return (
            <div className="exp__item">
                  <div className="exp__desc-container">
                <div className="exp__item__date">{item.date}</div>
              
                    <div className="exp__item__position">{item.position}</div>
                    </div>
                    <div className="exp__item__description">{item.description}</div>
               

            </div>
        )
    })
    return (
        <div className="exp">
            <div className="exp__title">Experience</div>
            <img className="exp__img" src={books} alt="books"></img>
            <div className="exp__items">  {items}</div>

        </div>
    )
}



export default Experience
import divider from "../divider.png"
function Formations() {
    const data = 
    [
        {
            date: '2021',
            position: 'React Native - The practical Guide',
            description: `Academind - Udemy`
        },
        {
            date: '2022',
            position: 'Advanced CSS and Sass',
            description: `Jonas Schmedtmann - Udemy`
        },
        {
            date: '2023',
            position: 'Modern React with Redux',
            description: `Stephen Grider - Udemy`
        },
        {
            date: '2023',
            position: '50 Projects In 50 Days - HTML, CSS & JavaScript',
            description: `Brad Traversy, Florin Pop - Udemy`
        },
        {
            date: '2023',
            position: 'Web Design for Web Developers: Build Beautiful Websites!',
            description: `Jonas Schmedtmann - Udemy`
        },
    ]

    const items = data.map((item, idx) => {
        return (
            <div className="for__item">
                  <div className="for__desc-container">
                <div className="for__item__date">{item.date}</div>
              
                    <div className="for__item__position">{item.position}</div>
                    </div>
                    <div className="for__item__description">{item.description}</div>
                    {idx === data.length-1 ? <></> : <img  className="for__item__divider" src={divider} alt="divider" />}
               

            </div>
        )
    })
    return (
        <div className="for">
            <div className="for__title">Formations</div>
            {/* <img className="for__img" src={books} alt="books"></img> */}
            <div className="for__items">  {items}</div>

        </div>
    )
}



export default Formations
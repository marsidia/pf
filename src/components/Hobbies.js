import camera from "../camera.png"
function Hobbies() {


    return (
        <div className="hob">
            <div className="hob__title">Centres d'intérêt</div>

            <div className="hob__items">
             <img className="hob__img" src={camera} alt="camera"></img>
                <div className="hob__center">
                    <div className="hob__item hob__item--1">Photographie</div>



                   
                    <div className="hob__item">Hockey sur glace</div> 
                    <div className="hob__item">Psychologie</div>

                </div>

               
            </div>

        </div>
    )
}



export default Hobbies
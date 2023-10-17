import timbre from "../timbre.png"
import stamp from "../stamp.png"


function Envelope() {
    return(
            
            
            <div className="env">
                <div className="env__stamps">
                     <img src={timbre} alt="" className="env__timbre" />
                    <img src={stamp} alt="" className="env__stamp" />

                </div>
                <div className="env__info">
                   <div className="env__info__name env__info__item">
                       Maria Sidko
                   </div>
                   <div className="env__info__position env__info__item">
                       Front end web developer
                   </div>
                   <div className="env__info__tel env__info__item">
                       Tel : 06 63 43 78 81
                   </div>
                   <div className="env__info__mail env__info__item">
                       Email : sidkomaria@outlook.com
                   </div>
                </div>
               
            </div>
    )

}
export default Envelope
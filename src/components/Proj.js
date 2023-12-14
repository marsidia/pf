import reactPic from "../img/react.png";
import sassPic from "../img/sass.png";
import htmlPic from "../img/html.png";
import cssPic from "../img/css.png";
import { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";

function Proj({title,react, sass, html, css,children, isLoading}){
  const titleRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        duration: 3
      },
      {
        opacity: 1
      }

    )
  }, [])
    return(
        <div className="proj">
            <div className={ isLoading ?"proj__title proj__title--load" : "proj__title"} ref={titleRef}>{title}</div>
            <div className="proj__children">
               {children}
            </div>
           
            <div className={ isLoading ?"proj__techs proj__techs--load" : "proj__techs"}>
              {react && (
                <div className="board__tech">
                  <img className="board__tech__react" src={reactPic} alt="" />
                  <div className="board__tech__title">React</div>
                </div>
              )}
              {sass && (
                <div className="board__tech">
                  <img className="board__tech__react" src={sassPic} alt="" />
                  <div className="board__tech__title">Sass</div>
                </div>
              )}
              {html && (
                <div className="board__tech">
                  <img className="board__tech__react" src={htmlPic} alt="" />
                  <div className="board__tech__title">HTML</div>
                </div>
              )}
              {css && (
                <div className="board__tech">
                  <img className="board__tech__react" src={cssPic} alt="" />
                  <div className="board__tech__title">CSS</div>
                </div>
              )}
            </div>
        </div>
    )
}
export default Proj
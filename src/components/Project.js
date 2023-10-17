import Tv from "./Tv";
import reactPic from "../react.png";
import sassPic from "../sass.png";
import htmlPic from "../html.png";
import cssPic from "../css.png";
import { forwardRef } from "react";

const Project = forwardRef(function (
  { title, react, sass, html, css, type = 1, children },
  ref
) {
  return (
    <div className="project" ref={ref}>
      <div className="project__item">
        {type === 1 && <Tv>{children}</Tv>}
        <div className="board">
          <div className="board__border">
            <div className="board__title">{title}</div>
            <div className="board__techs">
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
        </div>
        {type === 2 && <Tv>{children}</Tv>}
      </div>

      <div className="shelf"></div>
    </div>
  );
});
export default Project;

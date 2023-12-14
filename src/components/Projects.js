import { useRef } from "react";
import { useEffect } from "react";
import Menu from "./Menu";
import Tv from "./Tv";
import nosig from "../img/nosig.mp4";
import gsap from "gsap";

import jjlb from "../img/jjlbPreview.png";
import lu from "../img/luPreview.png";
import plane from "../img/planePreview.png";
import table from "../img/table3.jpg";

import { HiOutlineExternalLink } from "react-icons/hi";
import Proj from "./Proj";
import { useState } from "react";

import { GiSideswipe } from "react-icons/gi";
import { useNavigate } from "react-router";

function Projects() {
  const projRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 1);
    const tl = gsap.timeline();
    tl.fromTo(
      projRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const projects = [
    {
      title: "Plane",
      css: true,
      html: true,
      react: false,
      img: plane,
      link: "https://marsidia.github.io/plane/",
    },
    {
      title: "Lost Underground",
      css: true,
      html: true,
      react: true,
      img: lu,
      link: "https://marsidia.github.io/lu/",
    },
    {
      title: "JJLB Avocats",
      css: true,
      html: true,
      react: true,
      img: jjlb,
      link: "https://marsidia.github.io/jjlb/",
    },
  ];
  const navigate = useNavigate();
  const onNav = () => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);
    setIsLoading(true);
    gsap.fromTo(
      projRef.current,
      {
        transform: "rotateX(0)",
      },
      {
        opacity: 0,
        y: -500,
      }
    );
    return () => clearTimeout(timer);
  };
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const projDesc = (
    <Proj
      title={projects[currentProject].title}
      css={projects[currentProject].css}
      html={projects[currentProject].html}
      react={projects[currentProject].react}
      isLoading={isLoading}
    ></Proj>
  );

  const displayScreen = isLoading ? (
    <video autoPlay muted loop height={200}>
      <source src={nosig} />
    </video>
  ) : (
    <div className="project__link-container">
      <a
        className="project__link"
        href={projects[currentProject].link}
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlineExternalLink />{" "}
      </a>
      <img
        className="project__pic"
        src={projects[currentProject].img}
        alt="site shot"
      />
    </div>
  );

  const onClickNext = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (currentProject === projects.length - 1) {
        setCurrentProject(0);
      } else {
        setCurrentProject(currentProject + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  };
  const onClickPrev = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (currentProject === 0) {
        setCurrentProject(projects.length - 1);
      } else {
        setCurrentProject(currentProject - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <div className="projects" ref={projRef}>
      <div className="projects__back" onClick={onNav}>
        <GiSideswipe /> <div className="projects__back__text">Retour</div>
      </div>
      <div className="project__item">
        {projDesc}
        <div className="project__shelf">
          <Tv>{displayScreen}</Tv>
          <img className="project__img" src={table} alt="b" />
        </div>
        <Menu
          titles={[
            { title: "Précédent", onClick: onClickPrev },
            { title: "Suivant ", onClick: onClickNext },
          ]}
        />
      </div>
    </div>
  );
}
export default Projects;

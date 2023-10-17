import gsap from "gsap"
import { useRef } from "react"
import { useEffect } from "react"
import Menu from "./Menu"

import pic from "../SIDKO_CV_photo2.jpg"

import Project from "./Project"
import { HiOutlineExternalLink } from "react-icons/hi"





function Projects() {
    const projRef = useRef(null)
    const projContRef = useRef(null)
    const proj1ref = useRef(null)
    const proj2ref = useRef(null)
    const proj3ref = useRef(null)
    useEffect(() => {
        window.scrollTo(0, 1)
        let tl = gsap.timeline({

            scrollTrigger: {
                trigger: projRef.current,
                markers: true,
                start: "top top",
                end: "bottom bottom",

                scrub: 1,
                // pin: el,
                // pinSpacing: true,

            }
        })
        // tl.fromTo(projContRef.current, {
        //     transform: "scale(.3)",
        //     // zIndex: 10
        //     // x: window.innerWidth



        // }, {
        //     transform: "scale(1)  "
        //     // backgroundColor: "blue"
        //     // x: -(window.innerWidth)

        // })
        tl.fromTo(projContRef.current, {
            transform: "translateX(0)",
            // zIndex: 10
            // x: window.innerWidth



        }, {
            transform: "translateX(-200%)  "
            // backgroundColor: "blue"
            // x: -(window.innerWidth)

        })
    //     tl.fromTo(proj2ref.current, {
    //         // transform: "scale(.4) translateY(-50%) rotate(-7deg) skew(5deg, 5deg)",
    //         // zIndex: 10
    //         x: (window.innerWidth)



    //     }, {
    //         // transform: "scale(1)  "
    //         // backgroundColor: "blue"
    //         x: -window.innerWidth

    //     })
    //     tl.fromTo(proj3ref.current, {
    //         // transform: "scale(.4) translateY(-50%) rotate(-7deg) skew(5deg, 5deg)",
    //         // zIndex: 10
    //         x: window.innerWidth



    //     }, {
    //         // transform: "scale(1)  "
    //         // backgroundColor: "blue"
    //         x: -window.innerWidth

    //     })
    },[])

    return (
        <div className="projects" ref={projRef}>



            <Menu titles={[{ title: 'Contact', route: '/' }, { title: 'A propos', route: '/about' }, { title: 'curriculum vitae', route: '/curriculum' }]} />
            <div className="projects__container" ref={projContRef}>


                <Project title="Lost Underground" react sass html ref={proj1ref}>
                    <div className="project__link-container">

                        <a className="project__link" href="#"><HiOutlineExternalLink /> </a>
                        <img className="project__pic" src={pic} alt="site shot" />
                    </div>

                </Project>
                <Project title="Plane" type={2} css html ref={proj2ref}>
                    <div className="project__link-container">

                        <a className="project__link" href="#"><HiOutlineExternalLink /> </a>
                        <img className="project__pic" src={pic} alt="site shot" />
                    </div>
                </Project>
                <Project title="JJLB Avocats" css sass html ref={proj3ref}>
                    <div className="project__link-container">

                        <a className="project__link" href="#"><HiOutlineExternalLink /> </a>
                        <img className="project__pic" src={pic} alt="site shot" />
                    </div>
                </Project>
            </div>

        </div>
    )
}
export default Projects
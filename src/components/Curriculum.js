import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Menu from "./Menu";
import Experience from "./Experience";
import Formations from "./Formations";
import Education from "./Education";
import Langues from "./Langues";
import Hobbies from "./Hobbies";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


function Curriculum() {
    const curriRef = useRef(null)
    const paperRef = useRef(null)


    useEffect(() => {
        window.scrollTo(0, 1)
        let tl = gsap.timeline({

            scrollTrigger: {
                trigger: curriRef.current,
                markers: true,
                start: "top top",
                end: "bottom bottom",

                scrub: 1,
                // pin: el,
                // pinSpacing: true,

            }
        })
        tl.fromTo(paperRef.current, {
            transform: "scale(.4) translateY(-50%) rotate(-7deg) skew(5deg, 5deg)",
            zIndex: 10



        }, {
            transform: "scale(1)  "

        })


    }, [])
    return (
        <div className="curri__container" >
            <Menu titles={[{ title: 'Contact', route: '/' }, { title: 'A propos', route: '/about' }, { title: 'Projets', route: '/projects' }]} />
            <div className="curri__content" ref={paperRef}>


                <div className="curri" >

                    <div className="curri__title"><h4 className="curri__title__text">Curriculum vitae</h4></div>
                    <div className="curri__card--ex" >

                        <Experience />

                    </div>
                    <div className="curri__card--ed" >

                        <Education />
                    </div>
                    <div className="curri__card--fo" >

                        <Formations />
                    </div>
                    <div className="curri__card--lg" >

                        <Langues />
                    </div>
                    <div className="curri__card--ci" >


                        <Hobbies />
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Curriculum
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Envelope from "./Envelope";
import Radio from "./Radio";
gsap.registerPlugin(ScrollTrigger);





function Header() {

    const headref = useRef(null)



    const contref = useRef(null)
    const envref = useRef(null)
    useEffect(() => {
        window.scrollTo(0, 1)

        let tl = gsap.timeline({

            scrollTrigger: {
                trigger: headref.current,
                markers: true,
                start: "top top",
                end: "bottom bottom",

                scrub: 1,
                // pin: el,
                // pinSpacing: true,

            }
        })

        tl.fromTo(contref.current, {
            transform: "scale(6) rotate(47deg) translate(-34%, 7%)",
            zIndex: 10



        }, {
            transform: "scale(1)  "

        })
        tl.fromTo(contref.current, {
            transform: "scale(1) ",
            zIndex: 10



        }, {
            transform: "scale(2.5) rotate(-67deg) translate(28%, 3%)  "

        })


    }, [])


    return (
        <div className="header" >
            <div className="header__content" ref={contref}>
                <div className="header__env" ref={envref}>
                    <Envelope />
                </div>
                <div className="header__container" >
                    <Radio />

                </div>


            </div>




        </div>
    )
}
export default Header
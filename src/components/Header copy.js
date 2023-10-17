import SquaresBorder from "./ui/SquaresBorder"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);





function Header() {
    const [navi, setNavi] = useState('/')
    const navigate = useNavigate()

    const navCheckRef = useRef()
    const onScroll = () => {
        const top = navCheckRef.current.getBoundingClientRect().top
        if (top < window.innerHeight){
            const it1 = itemref1.current
            
            const el = formref.current
            gsap.to(it1,
                {
                    transform: 'scale(40)',
                    color: 'rgb(155, 106, 0)',
                    // color: 'transparent',
                    // overflow: 'hidden',
                    zIndex: 40,
                    duration: 1,
                    // backgroundColor: 'rgb(131, 131, 177)'
                })
            gsap.to(el,
                {
                    transform: 'scale(0)',

                    //  opacity:0,
                    duration: 1,
                })
            const timer = setTimeout(() => { navigate("/about") }, 1000)
            return () => clearTimeout(timer)
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', onScroll, true)
        return () => document.removeEventListener('scroll', onScroll, true);
    }, [])

    useEffect(() => {
        const it1 = itemref1.current
        const it2 = itemref2.current
        const it3 = itemref3.current
        const el = formref.current

        if (navi === "/about") {
            gsap.to(it1,
                {
                    transform: 'scale(40)',
                    // color: 'transparent',
                    // overflow: 'hidden',
                    zIndex: 40,
                    duration: 1,
                    // backgroundColor: 'rgb(131, 131, 177)'
                })
            gsap.to(el,
                {
                    transform: 'scale(0)',
                    //  opacity:0,
                    duration: 1,
                })

            const timer = setTimeout(() => { navigate("/about") }, 1000)
            return () => clearTimeout(timer)

        }
        if (navi === "/curriculum") {

            gsap.to(it3,
                {
                    transform: 'scale(40)',
                    // color: 'transparent',
                    // overflow: 'hidden',
                    zIndex: 40,
                    duration: 1,
                    // backgroundColor: 'rgb(131, 131, 177)'
                })
            gsap.to(el,
                {
                    transform: 'scale(0)',
                    //  opacity:0,
                    duration: 1,
                })
            const timer = setTimeout(() => { navigate("/curriculum") }, 1000)
            return () => clearTimeout(timer)

        }
        if (navi === "/projects") {

            gsap.to(it2,
                {
                    transform: 'scale(40)',
                    // color: 'transparent',
                    // overflow: 'hidden',
                    zIndex: 40,
                    duration: 1,
                    // backgroundColor: 'rgb(131, 131, 177)'
                })
            gsap.to(el,
                {
                    transform: 'scale(0)',
                    //  opacity:0,
                    duration: 1,
                })
            const timer = setTimeout(() => { navigate("/projects") }, 1000)
            return () => clearTimeout(timer)

        }





  






    }, [navi])


    const formref = useRef(null)
    const headref = useRef(null)
    const itemsref = useRef(null)
    const itemref1 = useRef(null)
    const itemref2 = useRef(null)
    const itemref3 = useRef(null)
    const titleref1 = useRef(null)
    const titleref2 = useRef(null)
    const titleref3 = useRef(null)
    useEffect(() => {
        const el = formref.current
        const el2 = headref.current
        const its = itemsref.current
        const it1 = itemref1.current
        const it2 = itemref2.current
        const it3 = itemref3.current
        const tit1 = titleref1.current
        const tit2 = titleref2.current
        const tit3 = titleref3.current
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: el2,
                markers: true,
                start: "top top",
                end: "bottom bottom",

                scrub: 1,
                // pin: el,
                // pinSpacing: true,

            }
        })
        tl.fromTo(el, {
            borderRadius: 0,
            duration: 1
        },
            {
                borderRadius: '50rem',
                duration: 1
            })
        tl.fromTo(el, {
            width: '100%',
            height: '100vh',
            top: 0,
            backgroundColor: 'white',
            border: "3px dotted white",

            // alignSelf: 'center',
            duration: 1

        },
            {
                width: '80vh',
                height: '80vh',
                top: '10%',
                backgroundColor: 'white',
                color: "black",
                // alignSelf: 'flex-start',
                duration: 1
            })
        tl.fromTo(its, {
            transform: 'rotate(0)',
            duration: 1
        },
            {
                transform: 'rotate(90deg)',
                duration: 1
            })
        tl.fromTo([it1, it2, it3], {
            transform: 'scale(0)',
            opacity: 0,
            duration: 1
        },
            {
                transform: 'scale(1)',
                opacity: 1,
                duration: 1,
            },
            "<")
        tl.fromTo([tit1, tit2, tit3], {
            transform: 'translateY(40rem) rotate(-90deg)',

            duration: 1
        },
            {
                transform: 'translateY(15rem) rotate(-90deg)',
                //  opacity:1,
                duration: 1,
            })
        //  tl.fromTo(it1, {
        //      transform :'scale(1)',
        //      duration: 1,
        //      backgroundColor: 'white'
        //  },
        //  {
        //     transform :'scale(40)',
        //     color: 'transparent',
        //     // overflow: 'hidden',
        //     zIndex: 20,
        //     duration: 1,
        //     backgroundColor: 'rgb(131, 131, 177)'
        //  },"+=2")

        //  tl.fromTo(el, {
        //     transform: 'scale(1)',
        //     // opacity: 1,
        //      duration: 1
        //  },
        //  {
        //      transform: 'scale(0)',
        //     //  opacity:0,
        //      duration: 1,
        //  },
        //  "<")





        //  tl.fromTo(it2, {
        //     transform: 'scale(0)',
        //     opacity: 0,
        //      duration: 1
        //  },
        //  {
        //      transform: 'scale(1)',
        //      opacity:1,
        //      duration: 1,
        //  },
        //  "<"

        //  )
        //  tl.fromTo(it3, {
        //     transform: 'scale(0)',
        //     opacity: 0,
        //      duration: 1
        //  },
        //  {
        //      transform: 'scale(1)',
        //      opacity:1,
        //      duration: 1,
        //  },
        //  "<")

        // gsap.fromTo(el, { 
        //     borderRadius: '50rem', 
        //     duration: 3,
        //     scrollTrigger : {
        //         trigger: el2,
        //         markers: true,
        //         start: "top top",
        //         end: "bottom top",

        //         scrub: 1,
        //         // pin: el,
        //         // pinSpacing: true,

        // }})
        //     ScrollTrigger.create({
        //         trigger: el,
        //         markers: true,
        //         start: "top 40%",
        //         end: "top 0%",
        //         scrub: 4,
        //         toggleClass: 'change',
        //         // pin: el

        //     })
    }, [])


    return (
        <div className="header" >
            {/* <Link to="/about">About</Link> */}
            {/* <SquaresBorder>
           

            </SquaresBorder> */}
            {/* <div className="card2"></div> */}
            <div className="container" ref={headref}>
                <div className="form" ref={formref}>
                    <div className="header__name">Maria Sidko</div>
                    <div className="header__title">Front end web developer</div>
                </div>
                <div className="items" ref={itemsref} >
                    <div className="item item--1" ref={itemref1} onClick={() => setNavi("/about")}>
                        <div className="item__titlecont" onClick={() => console.log("item1titlecons clicked")}>
                            <div className="item__title" ref={titleref1} >About</div>

                            {/* <Link className="item__title" ref={titleref1} to="/about">About</Link> */}
                        </div>
                    </div>
                    <div className="item item--2" ref={itemref2} onClick={() => setNavi("/projects")}>
                        <div className="item__titlecont">
                            <div className="item__title" ref={titleref2}>Projects</div>
                        </div>
                    </div>
                    <div className="item item--3" ref={itemref3} onClick={() => setNavi("/curriculum")}>
                        <div className="item__titlecont">
                            <div className="item__title" ref={titleref3}>Courses</div>
                        </div>
                    </div>
                </div> 
                <div className="header__nav-checker" ref={navCheckRef}></div>
            </div>
            {/* <div className="card2"></div> */}
           

        </div>
    )
}
export default Header
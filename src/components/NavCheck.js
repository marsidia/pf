import { useRef } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"



function NavCheck({animation, top, route, className}) {
    const navigate = useNavigate()
    const navCheckRef = useRef(null)
    const classs = className ? className  : 'nav-checker'

    const onScroll = () => {
        const top = navCheckRef.current.getBoundingClientRect().top
        if (top < window.innerHeight){
            
           animation()
            const timer = setTimeout(() => { navigate(route) }, 1000)
            return () => clearTimeout(timer)
        }
    }
    const onScrollBack = () => {
        const top = navCheckRef.current.getBoundingClientRect().top
        console.log(top, window.innerHeight);
        if (top >= 0){
            
           animation()
            const timer = setTimeout(() => { navigate(route) }, 1000)
            return () => clearTimeout(timer)
        }
    }
    useEffect(() => {
        if(top){
            // animation()
             document.addEventListener('scroll', onScrollBack, true)
        return () => document.removeEventListener('scroll', onScrollBack, true);
        }else{
            document.addEventListener('scroll', onScroll, true)
        return () => document.removeEventListener('scroll', onScroll, true);
        }
       
         

    }, [])
    return(
        <div className={classs} ref={navCheckRef}>

        </div>
    )
}
export default NavCheck